import { checkForName } from "./nameChecker";
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({ url: formText }),
    };
    fetch('/api', options)
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('pol-con').innerHTML = res.polarity_confidence;
            document.getElementById('subj-con').innerHTML =
                res.subjectivity_confidence;
        })
}

export { handleSubmit }
