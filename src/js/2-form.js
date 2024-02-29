const formEl = document.querySelector(".feedback-form");
const LS_KEY = "feedback-form-state";

formEl.addEventListener("input", onFormElInput);
document.addEventListener("DOMContentLoaded", () => {
    const data = loadFromLS(LS_KEY);

    formEl.elements.email.value = data.email;
    formEl.elements.message.value = data.message;
})
formEl.addEventListener("submit", onFormElSubmit)

function onFormElInput(e) { 
    const { email, message} = e.currentTarget.elements;
    const data = {
        email: email.value.trim(),
        message: message.value.trim(),
    };
    localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function loadFromLS(key) { 
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch { 
        return data;
    }
}

function onFormElSubmit(e) { 
    e.preventDefault();
    if (!formEl.elements.email.value || !formEl.elements.message.value) return;
    console.log(loadFromLS(LS_KEY));
    localStorage.removeItem(LS_KEY);
    formEl.elements.email.value = "";
    formEl.elements.message.value = "";
}