import { useState, useEffect, useCallback } from "react";

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [error, setError] = useState<string>("");

  // Clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const showError = (message: string) => {
    setError(message);
  };

  const handleNumber = useCallback((num: string) => {
    if (waitingForNewValue) {
      setCurrentValue(num);
      setWaitingForNewValue(false);
    } else {
      setCurrentValue(currentValue === "0" ? num : currentValue + num);
    }
  }, [currentValue, waitingForNewValue]);

  const calculate = useCallback(() => {
    const prev = parseFloat(previousValue?.toString() || "0");
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) {
      showError("Invalid calculation");
      return null;
    }

    let result: number;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        if (current === 0) {
          showError("Cannot divide by zero");
          return null;
        }
        result = prev / current;
        break;
      default:
        return null;
    }

    return Math.round((result + Number.EPSILON) * 100000000) / 100000000;
  }, [previousValue, currentValue, operation]);

  const handleOperation = useCallback((nextOperation: string) => {
    const inputValue = parseFloat(currentValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = calculate();
      if (result === null) return;
      
      setCurrentValue(String(result));
      setPreviousValue(result);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  }, [currentValue, previousValue, operation, calculate]);

  const handleEquals = useCallback(() => {
    if (operation && previousValue !== null) {
      const result = calculate();
      if (result !== null) {
        setCurrentValue(String(result));
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(true);
      }
    }
  }, [operation, previousValue, calculate]);

  const handleClear = useCallback(() => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
    setError("");
  }, []);

  const handleDecimal = useCallback(() => {
    if (waitingForNewValue) {
      setCurrentValue("0.");
      setWaitingForNewValue(false);
    } else if (currentValue.indexOf(".") === -1) {
      setCurrentValue(currentValue + ".");
    }
  }, [currentValue, waitingForNewValue]);

  const handlePercentage = useCallback(() => {
    const value = parseFloat(currentValue);
    setCurrentValue(String(value / 100));
  }, [currentValue]);

  const handleToggleSign = useCallback(() => {
    if (currentValue !== "0") {
      setCurrentValue(currentValue.startsWith("-") 
        ? currentValue.slice(1) 
        : "-" + currentValue);
    }
  }, [currentValue]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") {
        handleNumber(e.key);
      } else if (e.key === "+") {
        handleOperation("+");
      } else if (e.key === "-") {
        handleOperation("-");
      } else if (e.key === "*") {
        handleOperation("×");
      } else if (e.key === "/") {
        e.preventDefault();
        handleOperation("÷");
      } else if (e.key === "Enter" || e.key === "=") {
        handleEquals();
      } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
        handleClear();
      } else if (e.key === ".") {
        handleDecimal();
      } else if (e.key === "%") {
        handlePercentage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNumber, handleOperation, handleEquals, handleClear, handleDecimal, handlePercentage]);

  return (
    <div className="bg-white rounded-2xl shadow-calculator p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2" data-testid="text-calculator-title">
          Financial Calculator
        </h2>
        <p className="text-bank-secondary" data-testid="text-calculator-subtitle">
          Professional calculation tool for your banking needs
        </p>
      </div>

      {/* Calculator Display */}
      <div className="bg-gray-900 rounded-xl p-6 mb-6">
        <div className="text-right">
          <div className="text-gray-400 text-lg h-6 overflow-hidden" data-testid="text-operation-display">
            {previousValue !== null && operation && `${previousValue} ${operation}`}
          </div>
          <div className="text-white text-4xl font-light mt-2 h-12 overflow-hidden" data-testid="text-main-display">
            {currentValue}
          </div>
        </div>
      </div>

      {/* Calculator Buttons */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1: Clear, ±, %, ÷ */}
        <button 
          className="calculator-btn bg-bank-secondary text-white hover:bg-gray-600"
          onClick={handleClear}
          data-testid="button-clear"
        >
          <span className="text-lg">C</span>
        </button>
        <button 
          className="calculator-btn bg-bank-secondary text-white hover:bg-gray-600"
          onClick={handleToggleSign}
          data-testid="button-toggle-sign"
        >
          <span className="text-lg">±</span>
        </button>
        <button 
          className="calculator-btn bg-bank-secondary text-white hover:bg-gray-600"
          onClick={handlePercentage}
          data-testid="button-percentage"
        >
          <span className="text-lg">%</span>
        </button>
        <button 
          className="calculator-btn bg-bank-primary text-white hover:bg-bank-dark"
          onClick={() => handleOperation("÷")}
          data-testid="button-divide"
        >
          <span className="text-xl">÷</span>
        </button>

        {/* Row 2: 7, 8, 9, × */}
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("7")}
          data-testid="button-number-7"
        >
          <span className="text-xl font-medium">7</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("8")}
          data-testid="button-number-8"
        >
          <span className="text-xl font-medium">8</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("9")}
          data-testid="button-number-9"
        >
          <span className="text-xl font-medium">9</span>
        </button>
        <button 
          className="calculator-btn bg-bank-primary text-white hover:bg-bank-dark"
          onClick={() => handleOperation("×")}
          data-testid="button-multiply"
        >
          <span className="text-xl">×</span>
        </button>

        {/* Row 3: 4, 5, 6, - */}
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("4")}
          data-testid="button-number-4"
        >
          <span className="text-xl font-medium">4</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("5")}
          data-testid="button-number-5"
        >
          <span className="text-xl font-medium">5</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("6")}
          data-testid="button-number-6"
        >
          <span className="text-xl font-medium">6</span>
        </button>
        <button 
          className="calculator-btn bg-bank-primary text-white hover:bg-bank-dark"
          onClick={() => handleOperation("-")}
          data-testid="button-subtract"
        >
          <span className="text-xl">-</span>
        </button>

        {/* Row 4: 1, 2, 3, + */}
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("1")}
          data-testid="button-number-1"
        >
          <span className="text-xl font-medium">1</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("2")}
          data-testid="button-number-2"
        >
          <span className="text-xl font-medium">2</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={() => handleNumber("3")}
          data-testid="button-number-3"
        >
          <span className="text-xl font-medium">3</span>
        </button>
        <button 
          className="calculator-btn bg-bank-primary text-white hover:bg-bank-dark"
          onClick={() => handleOperation("+")}
          data-testid="button-add"
        >
          <span className="text-xl">+</span>
        </button>

        {/* Row 5: 0 (spans 2), ., = */}
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50 col-span-2"
          onClick={() => handleNumber("0")}
          data-testid="button-number-0"
        >
          <span className="text-xl font-medium">0</span>
        </button>
        <button 
          className="calculator-btn bg-white text-gray-900 hover:bg-gray-50"
          onClick={handleDecimal}
          data-testid="button-decimal"
        >
          <span className="text-xl">.</span>
        </button>
        <button 
          className="calculator-btn bg-bank-accent text-white hover:bg-green-700"
          onClick={handleEquals}
          data-testid="button-equals"
        >
          <span className="text-xl">=</span>
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div 
          className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
          data-testid="text-error-display"
        >
          {error}
        </div>
      )}
    </div>
  );
}
