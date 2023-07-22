let journalData; // global var for journal

// on load, hook up buttons and pull down journal entries
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#post-btn').addEventListener('click',postJournal);
    document.querySelector('#update-btn').addEventListener('click',fetchJournals);
    fetchJournals();
})

// when clicked, post the text boxes
const postJournal = async ()=>{
    const title = document.querySelector('#title-input').value
    const entry = document.querySelector('#entry-input').value;
    try {
    const data = await fetch('/journal/new', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            entry: entry,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const result = await data.json();
        console.log(result);
    } catch(err){
        console.log('error adding');
    }
}

// Fetch all journals
const fetchJournals = async ()=>{
    try {
        const result = await fetch('/journal/all');
        journalData = await result.json();
    } catch(err){
        console.log('error fetching')
    }
    fillDisplay(journalData); // display them
}

// delete a journal when clicked by _id
const deleteJournal = async (e)=>{
    console.log(e);
    const deleteId = e.target.id.slice(3); // the button id is btn+id, so slice off btn
    console.log(deleteId);
    try {
        const data = await fetch('/journal/'+deleteId,{
            method: 'DELETE'
        })
        const result = await data.json();
        console.log(result);
        document.getElementById('cont'+deleteId).remove(); // remove cont+id container
    } catch(err){
        console.log('error deleting')
    }
}

// fetch all journals
const fillDisplay = (data)=>{
    const journalContainer = document.getElementById('journal-container'); // grab the container
    data.forEach(journalItem=>{
        if (!document.querySelector('#cont'+journalItem._id)) { // if cont+id doesn't exist
            const newJournal = document.createElement('div');
            newJournal.style.borderStyle = 'solid';
            newJournal.setAttribute('id','cont'+journalItem._id);
            const newTitle = document.createElement("div");
            newTitle.textContent = journalItem.title;
            const newEntry = document.createElement("div");
            newEntry.textContent = journalItem.entry;
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('id','btn'+journalItem._id)
            deleteBtn.addEventListener('click',deleteJournal);
            deleteBtn.innerText = "Delete Entry"
            journalContainer.appendChild(newJournal);
            newJournal.appendChild(newTitle);
            newJournal.appendChild(newEntry);
            newJournal.appendChild(deleteBtn); 
        } 
    })
}