"use strict";

const STORAGE_KEY = "expenseTracker.expenses";

const form = document.getElementById("expense-form");
const titleInput = document.getElementById("expense-title");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const dateInput = document.getElementById("expense-date");
const formMessage = document.getElementById("form-message");
const submitButton = document.getElementById("submit-button");
const cancelEditButton = document.getElementById("cancel-edit-button");
const formHeading = document.getElementById("expense-form-heading");
const categoryFilter = document.getElementById("category-filter");
const expenseList = document.getElementById("expense-list");
const expenseTotal = document.getElementById("expense-total");
const storageMessage = document.querySelector("#storage-message");

let expenses = loadExpenses();
let editingId = null;

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isValidExpense(expense) {
  return (
    expense &&
    typeof expense.id === "string" &&
    typeof expense.title === "string" &&
    expense.title.trim() !== "" &&
    typeof expense.category === "string" &&
    expense.category.trim() !== "" &&
    typeof expense.date === "string" &&
    expense.date !== "" &&
    typeof expense.amount === "number" &&
    Number.isFinite(expense.amount) &&
    expense.amount > 0
  );
}

function loadExpenses() {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) {
      storageMessage.textContent = "Stored expense data was invalid and could not be loaded.";
      return [];
    }

    return parsedValue.filter(isValidExpense).map((expense) => ({
      id: expense.id,
      title: expense.title.trim(),
      amount: expense.amount,
      category: expense.category.trim(),
      date: expense.date
    }));
  } catch (error) {
    storageMessage.textContent = "Stored expenses could not be loaded.";
    return [];
  }
}

function saveExpenses(expensesToSave) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expensesToSave));
    storageMessage.textContent = "";
    return true;
  } catch (error) {
    storageMessage.textContent = "Expenses could not be saved to browser storage.";
    return false;
  }
}

function validateExpense() {
  const title = titleInput.value.trim();
  const category = categoryInput.value.trim();
  const date = dateInput.value;
  const amount = Number(amountInput.value);

  if (!title || !category || !date || amountInput.value.trim() === "") {
    return { valid: false, message: "Title, amount, category, and date are required." };
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    return { valid: false, message: "Amount must be a number greater than zero." };
  }

  return {
    valid: true,
    expense: {
      title,
      amount,
      category,
      date
    }
  };
}

function resetForm() {
  form.reset();
  editingId = null;
  submitButton.textContent = "Add Expense";
  cancelEditButton.hidden = true;
  formHeading.textContent = "Add Expense";
  formMessage.textContent = "";
  titleInput.focus();
}

function updateCategoryFilter() {
  const previousValue = categoryFilter.value;
  const categories = [...new Set(expenses.map((expense) => expense.category))]
    .sort((first, second) => first.localeCompare(second));

  categoryFilter.replaceChildren();
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "All Categories";
  categoryFilter.appendChild(allOption);

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  if (categories.includes(previousValue)) {
    categoryFilter.value = previousValue;
  } else {
    categoryFilter.value = "";
  }
}

function calculateTotal() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function formatAmount(amount) {
  return amount.toFixed(2);
}

function createExpenseItem(expense) {
  const item = document.createElement("li");
  item.className = "expense-item";

  const details = document.createElement("div");
  details.className = "expense-details";

  const title = document.createElement("strong");
  title.textContent = expense.title;

  const amount = document.createElement("span");
  amount.textContent = formatAmount(expense.amount);

  const category = document.createElement("span");
  category.textContent = `Category: ${expense.category}`;

  const date = document.createElement("span");
  date.textContent = `Date: ${expense.date}`;

  details.append(title, amount, category, date);

  const actions = document.createElement("div");
  actions.className = "expense-actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Edit";
  editButton.dataset.action = "edit";
  editButton.dataset.id = expense.id;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.dataset.action = "delete";
  deleteButton.dataset.id = expense.id;

  actions.append(editButton, deleteButton);
  item.append(details, actions);

  return item;
}

function renderExpenses() {
  updateCategoryFilter();
  expenseList.replaceChildren();

  const selectedCategory = categoryFilter.value;
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (visibleExpenses.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No expenses to display.";
    expenseList.appendChild(emptyMessage);
  } else {
    visibleExpenses.forEach((expense) => {
      expenseList.appendChild(createExpenseItem(expense));
    });
  }

  expenseTotal.textContent = formatAmount(calculateTotal());
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = validateExpense();

  if (!result.valid) {
    formMessage.textContent = result.message;
    return;
  }

  let updatedExpenses;

  if (editingId) {
    const expenseIndex = expenses.findIndex((expense) => expense.id === editingId);
    if (expenseIndex === -1) {
      formMessage.textContent = "The expense is no longer available.";
      return;
    }

    updatedExpenses = expenses.map((expense) =>
      expense.id === editingId
        ? { id: editingId, ...result.expense }
        : expense
    );
  } else {
    updatedExpenses = [
      ...expenses,
      {
        id: createId(),
        ...result.expense
      }
    ];
  }

  if (!saveExpenses(updatedExpenses)) {
    formMessage.textContent = "The expense was not saved. Please try again.";
    return;
  }

  expenses = updatedExpenses;
  resetForm();
  renderExpenses();
});

cancelEditButton.addEventListener("click", resetForm);

expenseList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const expenseId = button.dataset.id;
  const expense = expenses.find((item) => item.id === expenseId);
  if (!expense) {
    return;
  }

  if (button.dataset.action === "edit") {
    editingId = expenseId;
    titleInput.value = expense.title;
    amountInput.value = String(expense.amount);
    categoryInput.value = expense.category;
    dateInput.value = expense.date;
    submitButton.textContent = "Save Expense";
    cancelEditButton.hidden = false;
    formHeading.textContent = "Edit Expense";
    formMessage.textContent = "";
    titleInput.focus();
  }

  if (button.dataset.action === "delete") {
    const updatedExpenses = expenses.filter((item) => item.id !== expenseId);
    if (!saveExpenses(updatedExpenses)) {
      formMessage.textContent = "The expense was not deleted. Please try again.";
      return;
    }

    expenses = updatedExpenses;
    if (editingId === expenseId) {
      resetForm();
    }
    renderExpenses();
  }
});

categoryFilter.addEventListener("change", renderExpenses);

renderExpenses();