import data from './quiz.json' assert {type: 'json'}

const paragraph = document.querySelector("#question")
const editButton = document.querySelector("#edit-button")

paragraph.innerHTML = `<p>${data.Text}</p>
<ol>
<li>${data.Option[0]}</li>
<li>${data.Option[1]}</li>
</ol>`

editButton.addEventListener("click", function () {
    paragraph.innerHTML = `
    <p>Question Text:</p>
    <textarea id="qtitle" name="qtitle" rows="4" cols="80">${data.Text}</textarea>
    <p>Option 1:</p><textarea id="option1" name="option1" rows="2" cols="60">${data.Option[0]}</textarea>
    <p>Option 2:</p><textarea id="option2" name="option2" rows="2" cols="60">${data.Option[1]}</textarea>`

    editButton.innerHTML = `<span id="save-button">Save</span>`

})

const saveButton = document.querySelector("#save-button")
saveButton.addEventListener("click", function() {
    const editQuestion = document.querySelector("#qtitle")
    const editOption1 = document.querySelector("#option1")
    const editOption2 = document.querySelector("#option2")

    data.Text = editQuestion.value
    data.Option[0] = editOption1.value
    data.Option[1] = editOption2.value

})

