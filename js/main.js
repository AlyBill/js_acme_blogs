//function 1

function createElemWithText(HTMLelement="p",textContent="",className="")
{
  //var myElement is creating to store HTML element using the createElement() function
  var myElement = document.createElement(HTMLelement);

  //myElement.className gets set to className
  myElement.className=className;

  //the innterText of myElement gets set to textContent
  myElement.innerText=textContent;

  //returns myElement 
  return myElement;
  
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function 2

function createSelectOptions(myUsers)
{
  //if the myUsers parameter doesn't have any data, createSelectOptions will return undefined
  if (!myUsers)
    {
      return undefined;
    }

  //myOptions is a created array
  const myOptions = [];
  
  for (const user of myUsers)
  {
    //option is created to the createElement function containing "option"
    const option = document.createElement("option");

    //the following sets value, textContent to id and name (in the user attribute)
    option.value = user.id;
    option.textContent = user.name;

    //the following pushes option to myOptions 
    myOptions.push(option);
    
    
  }
  //returns myOptions
  return myOptions;
  
  
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function 3


function toggleCommentSection(postId) 
  
{
//if nothing in postId parameter, toggleCommentSection will return undefined          
 if (!postId) 
 {
   return undefined;
  } 
   
  else 
  {
   const commentSections = document.querySelectorAll('[data-post-id]');
    
                
  for (let x = 0; x < commentSections.length; x++) 
  {
  const commentSection = commentSections[x];
                   
 if (commentSection.getAttribute('data-post-id') === postId) 
    {
                        
      commentSection.classList.toggle('data');
                      
      return commentSection;
    } }
   return null;}   }


//function 4

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function toggleCommentButton (postID) 
{

//if postId is empty, function will return undefined
  if (!postID) 
  {
    return undefined;
  }
 const buttons = document.querySelector(`button[data-post-id = "${postID}"`);
  

  if (buttons != null) 
  {
    buttons.textContent === "Show Comments" ? (buttons.textContent = "Hide Comments") : (buttons.textContent = "Show Comments");
  }

  return buttons;
};

console.log(toggleCommentButton("btnToTest"));



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//function 5

 function remove()
   

function deleteChildElements(parentElement) 
{
if (!parentElement || !(parentElement instanceof HTMLElement)) {
    return undefined;
  }
{ 
  let child = parentElement.lastElementChild; 
  while (child){ 

    parentElement.removeChild(child);
    
    child = parentElement.lastElementChild; 
    }
  return parentElement
  }
}


//function 6
const addButtonListeners = () => {
    let myMainElem = document.querySelector('main')
    
    let buttonsList = myMainElem.querySelectorAll('button')
    
    if(buttonsList)
    {
        for(let x = 0; x < buttonsList.length; x++){
            let myButton = buttonsList[x]
            let postId = myButton.dataset.postId
            myButton.addEventListener('click', function(event)
                                      {
                toggleComments(event, postId), false
            })
        }
        return buttonsList
    }

}
//function 7
const removeButtonListeners = () => 
{
    let myMainElem = document.querySelector('main');
  
    let buttonsList = myMainElem.querySelectorAll('button');
  
    console.log(buttonsList);
  
    if(buttonsList)
    {
        for(let x = 0; x < buttonsList.length; x++)
        {
            let myButton = buttonsList[x];
          
            const postId = myButton.dataset.postId;
          
            myButton.removeEventListener('click', function(event)
          { 
            toggleComments(event, postId), false
        })
        }
        return buttonsList;
    }
}

//function 8
function createComments(comments) 
{
      
      if (!comments) {
        return undefined;
      }
      
      let fragment = document.createDocumentFragment();
      
      for (let i = 0; i < comments.length; i++) 
      {
        var comment = comments[i];
        
        let article = document.createElement("article");
        
        let h3 = createElemWithText('h3', comment.name);
        
        let p1 = createElemWithText('p', comment.body);
        
        let p2 = createElemWithText('p', `From: ${comment.email}`);
        
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        
        fragment.appendChild(article);
      }
    
      return fragment;
}


//function 9

function populateSelectMenu (JSONDATA) 
{

  if (JSONDATA) 
  {
  
    let menu1 = document.querySelector("#selectMenu");


    let myArray = createSelectOptions(JSONDATA);


    myArray.forEach((eachOpt) => 
    {
     
      menu1.appendChild(eachOpt);
    });

    
    return menu1;
  }
}

//function 10
async function getUsers()
{
  try 
  {
    const myResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const myData = await myResponse.json();
    
    return myData;
  } 
    catch (error) 
    {
    console.error(error);
  }
}

//function 11
async function getUserPosts(id) 
{
  if (!id){
    return undefined;
  }
  try 
  {
    const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    
    const myData = await myResponse.json();
    return myData;
  } 
  catch (error) 
  {
    console.error(error);
  }
}

//function 12
async function getUser(userId) 
{
  if(!userId){
    return undefined;
  }
  try 
  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) 
    {
      throw new Error('Failed to fetch user data');
    }
    const userData = await response.json();
    return userData;
  } 
  catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}


//function 13
async function getPostComments(postId) 
{ if (!postId)
{
  return undefined;
}
  try 
  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!response.ok) 
    {
      throw new Error('Failed to fetch post comments');
    }
    const commentsD = await response.json();
    
    return commentsD;
    
  } catch (error) 
  {
    console.error('Error:', error);
    throw error;
  }
}

//function 14
async function displayComments(postId){
  if (!postId){
    return undefined;
  }
  var myFunction = document.createElement();
  myFunction.dataset.postId();
  var fragments = createComments(comment);
  myFunction.fragments;
  return myFunction;

}

  




//function 15
async function createPosts(posts) 
{
  if (!posts){
    return undefined;
  }
    const fragment = document.createDocumentFragment();
    for (const post of posts) 
    {
        const article = document.createElement('article');
      
        const h2 = createElemWithText('h2',post.title);
      
        const p1 = createElemWithText('p',post.body);
      
        const p2 = createElemWithText('p',`Post ID: ${post.id}`);
      
        const author = await getUser(post.userId);
      
        const p3 = createElemWithText('p',`Author: ${author.name} with ${author.company.name}`);
      
        const p4 = createElemWithText('p',author.company.catchPhrase);
      
        const button = createElemWithText('button', 'Show Comments');
      
        button.dataset.postId = post.id;
      
        article.append(h2, p1, p2, p3, p4, button);
      
        const section = await displayComments(post.id);
      
        article.append(section);
      
        fragment.append(article);
    }
    return fragment;
}

//function 16
const displayPosts = async (posts) => 
{
    let myMain = document.querySelector("main");
    let element = (posts) ? await createPosts(posts) : document.querySelector("main p");
    myMain.append(element);
    return element;
}

//function 17
function toggleComments(event, postId)
{
    if (!event||!postId)
    {
        return undefined;
    }
    event.target.listener = true;
  
    let section  = toggleCommentSection(postId);
  
    let button = toggleCommentButton(postId);
  
    return [section, button];
}

//function 18
const refreshPosts = async (posts) => 
{
    if (!posts){
        return undefined;
    }
    let buttons = removeButtonListeners();
    let myMain = deleteChildElements(document.querySelector("main"));
    let fragment = await displayPosts(posts);
    let button = addButtonListeners();
    return [buttons, myMain, fragment, button];
}

//function 19

const selectMenuChangeEventHandler = async (e) => 
{
    try {
        let userId = e?.target?.value || 1;
        let posts = await getUserPosts(userId);
        let refreshPostsArray = await refreshPosts(posts);
        return [userId, posts, refreshPostsArray];
    } catch (error) {
        console.error("An error occurred in selectMenuChangeEventHandler: ", error);
        return null;
    }
}

//function 20
const initPage = async () => 
{
  
    try 
    {
        let users = await getUsers();
        let select = populateSelectMenu(users);
        return [users, select];
    } catch (error) 
    {
        console.error("An error occurred in initPage: ", error);
        return null;
    }
}

//function 21
function initApp() {
    initPage().then(([users, select]) => 
      {
        let selectMenu = document.getElementById("selectMenu");
        if (selectMenu) 
        {
            selectMenu.appendChild(select);
            selectMenu.addEventListener("change", selectMenuChangeEventHandler, false);
        }
    });
}

document.addEventListener("DOMContentLoaded", initApp, false);






