const container = document.querySelector(".container")

container.addEventListener("click", (e) => {
    const targetElem = e.target;
    if (targetElem.classList.contains("reply")) {
        // console.log("I'm in reply");
        createReplyInput(e);
    } else {
        const isSubmit = targetElem.classList.contains("btn-submit");
        if (isSubmit) {
            createComment(e);
        }
    }
});


function createReplyInput(e) {
    const replyButton = e.target; // Assuming e.target is the clicked 'Reply' div
    const commentCard = replyButton.closest('.comment_card');
    const existingReplies = commentCard.querySelectorAll('.comment-container').length;

    if (existingReplies >= 3) {
        alert('Maximum of 3 replies allowed per comment.');
        return;
    }

    const fragment = document.createDocumentFragment();
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    //     <div class="comment_reply_container">
    //         <input type="text" placeholder="Write your comment">
    //         <button class="btn-submit">submit</button>
    //     </div> 

    replyContainer.setAttribute("class", "comment_reply_container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Write your comment");

    button.setAttribute("class", "btn-submit");
    button.textContent = "submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    e.target.parentNode.appendChild(fragment);
}

function createComment(e) {

    // <div class="comment-container">
    //             <div class="comment_card">
    //                 <h3 class="coment_text">Thanks for asking, How are you?</h3>
    //                 <div class="reply">Reply</div>
    //             </div> 

    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");

    const input = e.target.parentNode.children[0];
    // console.log(input.value);
    commentContainer.innerHTML = `
    <class="comment_card">
        <h3 class="coment_text">${input.value}</h3>
        <div class="reply">Reply</div>`;

    const commentReplyContainer = e.target.parentNode;
    const commentCard = commentReplyContainer.parentNode;
    // console.log(commentCard);
    commentCard.replaceChild(commentContainer, commentReplyContainer);
}

document.addEventListener('DOMContentLoaded', function() {
    const collapseBtn = document.querySelector('.collapse-btn');
    collapseBtn.addEventListener('click', function() {
        const allCommentContainers = document.querySelectorAll('.comment-container');
        allCommentContainers.forEach(container => {
            if (container.classList.contains('collapsed')) {
                container.classList.remove('collapsed');
                collapseBtn.textContent = 'Collapse All';
            } else {
                container.classList.add('collapsed');
                collapseBtn.textContent = 'Expand All';
            }
        });
    });
});

