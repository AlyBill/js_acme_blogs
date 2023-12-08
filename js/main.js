//function 1
//-------------------------------------------------------------------------------------------------------------------------
function createElemWithText(HTMLelement="p",textContent="",className="")
{
  
  
  var myElement = document.createElement(HTMLelement);
  
  
  myElement.className=className;
  
  myElement.innerText=textContent;
  
  return myElement;
  
}

//------------------------------------------------------------------------------------------------------------------------
//function 2
function createSelectOptions(myUsers){
  if (!myUsers)
    {
      return undefined;
    }
  const myOptions = [];
  for (const user of myUsers){
    const option = document.createElement("option");
    
    option.value = user.id;
    
    option.textContent = user.name;
    
    myOptions.push(option);
    
    
  }
  return myOptions;
  
  
}
//--------------------------------------------------------------------------------------------------------------------------

//function 3

        function toggleCommentSection(postId) 
{
            
            if (!postId) {
                return undefined;
            } 
        else 
            {
                const commentSections=document.querySelectorAll('[data-post-id]');
                
                for (let x=0;x<commentSections.length;x++) 
                {
                    const commentSection=commentSections[x];
                   
                    if (commentSection.getAttribute('data-post-id') === postId) 
                    {
                        
                        commentSection.classList.toggle('data');
                      
                      
                      
                      
                      
                        return commentSection;
                    }
                }
              
              
              
              
              return null;
                
              
            }   
        }
//--------------------------------------------------------------------------------------------------------------------------
//function 4


function toggleCommentButton (postID) 
{


  if (!postID) 
  {
    return undefined;
  }


  const theButtons = document.querySelector(`button[data-post-id = "${postID}"`);
  

  if (theButtons != null) 
  {
    theButtons.textContent === "Show Comments"?(theButtons.textContent="Hide Comments"):(theButtons.textContent= "Show Comments");
  }

  return theButtons;
  
  
  
};
console.log(toggleCommentButton("btnToTest"));





//-------------------------------------------------------------------------------------------------------------------------

//function 5


function deleteChildElements(parentElement) 

{
  
if (!parentElement || !(parentElement instanceof HTMLElement)) 
  {
    return undefined;
  }
{ 
  let childs = parentElement.lastElementChild; 
  while (childs)
  
  {
    
    

    parentElement.removeChild(childs);
    
    childs = parentElement.lastElementChild; 
    }
  
  
  
  
  
  
  return parentElement;
  }
}

//---------------------------------------------------------------------------------------------------------------------------
//function 6
const addButtonListeners=()=> 
{
    let mine = document.querySelector('main');
    
    let buttonsListing = mine.querySelectorAll('button');
    
    if(buttonsListing)
    {
        for(let x = 0; x < buttonsListing.length; x++)
        {
            let mineee = buttonsListing[x]
            let postId = mineee.dataset.postId
            mineee.addEventListener('click',function(event)
                                      {
                toggleComments(event, postId),false
            })
        }
        return buttonsListing;
    }

}





//------------------------------------------------------------------------------------------------------------------------
//function 7
const removeButtonListeners=()=> 
{
    let mine = document.querySelector('main');
  
    let buttonsListing = mine.querySelectorAll('button');
  
    console.log(buttonsListing);
  
    if(buttonsListing)
    {
        for(let x = 0;x < buttonsListing.length;x++)
        {
            let mineee=buttonsListing[x];
          
          
          
            const postId=mineee.dataset.postId;
          
          
          
            mineee.removeEventListener('click',function(event)
                                       
                                       
          { 
            toggleComments(event,postId), false
              
        }                     )
          
          
          
          
        }
        return buttonsListing;
    }
  
  
}
//-------------------------------------------------------------------------------------------------------------------
//function 8
function createComments(comments) 
{
      
      if (!comments) 
      {
        return undefined;
      }
  
  
      
      let f1 = document.createDocumentFragment();
      
      for (let x = 0;x < comments.length;x++) 
      {
        var c1 = comments[x];
        
        let article = document.createElement("article");
        
        let h3=createElemWithText('h3', c1.name)  ;
        
        let p1=createElemWithText('p', c1.body)    ;
        
        let p2=createElemWithText('p', `From: ${c1.email}`) ;
        
        article.appendChild(h3);
        
        
        article.appendChild(p1);
        
        
        article.appendChild(p2);
        
        
        
        f1.appendChild(article);
      }
  
  
  
  
  
    
      return f1;
}



//---------------------------------------------------------------------------------------------------------------------
//function 9

function populateSelectMenu (JSONDATA) 
{

  if (JSONDATA) 
  {
  
    let theDeliMenu=document.querySelector("#selectMenu");
    


    let myArraysForDays=createSelectOptions(JSONDATA);


    myArraysForDays.forEach((eachOpt) => 
    {
     
      theDeliMenu.appendChild(eachOpt);
      
      
      
    });

    
    return theDeliMenu;
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//function 10
async function getUsers()
{
  
  
  try  //tries first and catch later on
  {
    const myResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const myData = await myResponse.json();
    
    return myData;
  } 
  
  
    catch (error) 
    {
      //catches error and puts error on console
    console.error(error);
  }
}


//---------------------------------------------------------------------------------------------------------------------
//function 11
async function getUserPosts(id) 
{
  //if no id returns undefined
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





//-----------------------------------------------------------------------------------------------------------------------------

//function 12
async function getUser(userId) 
{
  if(!userId)  //returns undefined if userId is empty
  {
    return undefined;
  }
  
  
  
  
  try 
  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    
    if (!response.ok) 
      
      
    {
      throw new Error('Failed.');
    }
    
    const usersusers = await response.json();
    
    
    return usersusers;
  } 
  catch (error) 
  {
    console.error('Error ', error);
    
    throw error;
  }
}

//--------------------------------------------------------------------------------------------------------------------------
//function 13
async function getPostComments(postId) 

{
  if (!postId)  //if postId is empty returns undefined
  {
  return undefined;
  }
  
  
  
  try 
    
  {
    const responseIsOk=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    
    
    if (!responseIsOk.ok) 
    {
      throw new Error('Failed.');
      
    }
    
    
    const comD = await responseIsOk.json();
    
    return comD;
    
  } 
  catch (error) 
  {
    
    console.error('Error:', error);
    
    
    throw error;
  }
}


//-------------------------------------------------------------------------------------------------------------------------

//function 14
async function displayComments(postId)
{
  //if postId is empty function will return undefined
  
  if (!postId)
  {
    return undefined;
  }
  var myFunctionNow = document.createElement();
  
  
  myFunctionNow.dataset.postId();
  
  
  var comD;
  
  
  var fragments = createComments(comD);
  
  
  myFunctionNow.fragments;
  
  
  return myFunctionNow;

}

  



//---------------------------------------------------------------------------------------------------------------------
//function 15
async function createPosts(posts) 
{
  //if posts is empty function will return undefined
  
  if (!posts)
  {
    return undefined;
  }
  
  
    const f1 = document.createDocumentFragment();
    for (const post of posts) 
      
    {
        const article=document.createElement('article');
      
      
        const h2=createElemWithText('h2',post.title);
      
      
       
      
        const p2=createElemWithText('p',`Post ID:${post.id}`);
      
        
        const p1=createElemWithText('p',post.body);
      
        

        const p3=createElemWithText('p',`Author:${author.name} with ${author.company.name}`);
      
        const author=await getUser(post.userId);
      
        const p4=createElemWithText('p',author.company.catchPhrase);
      
      
      
        const button=createElemWithText('button','Show Comments');
      
      
      
        button.dataset.postId = post.id;
      
      
        article.append(h2, p1, p2, p3, p4, button);
      
      
        const thisIsNow = await displayComments(post.id);
      
        article.append(thisIsNow);
      
        f1.append(article);
    }
    return f1;
}



//---------------------------------------------------------------------------------------------------------------------

//function 16
const displayPosts = async (posts) => 
{
    let mine=document.querySelector("main");
  
  
    let two=(posts)?await createPosts(posts) : document.querySelector("main p");
  
  
    mine.append(two);
  
  
    return two;
}

//------------------------------------------------------------------------------------------------------------------------

//function 17
function toggleComments(event, postId)

{
    if (!event)
    {
        return undefined;
    }
  else if (!postId)
  {
    
    return undefined;
    
  }
    event.target.listener = true;
  
  
    let s1  = toggleCommentSection(postId);
  
    let b1 = toggleCommentButton(postId);
  
  
  
    return [s1,b1];
}




//----------------------------------------------------------------------------------------------------------------------

//function 18
const refreshPosts = async (posts) => 
{
    if (!posts)
    {
        return undefined;
    }
    let b1=removeButtonListeners();
  
    let m1=deleteChildElements(document.querySelector("main"));
  
    let f1=await displayPosts(posts);
  
    let b=addButtonListeners();
  
    return [b1, m1, f1, b];
}

//------------------------------------------------------------------------------------------------------------------------

//function 19

const selectMenuChangeEventHandler = async (e) => 
{
  
    try 
    {
        let userId = e?.target?.value ||       1;
      
        let p1=await getUserPosts(userId);
      
        let r=await refreshPosts(p1);
      
      
      
        return [userId, p1, r];
    } 
  catch (error) 
  {
        console.error("Error ", error);
    
    
    
    
    
    
    
        return null;
    }
}




//------------------------------------------------------------------------------------------------------------------------
//function 20

const initPage = async () => 
{
  
    try 
      
    {
        let u1 = await getUsers();
      
        let s = populateSelectMenu(u1);
      
        return [u1, s];
    } 
  catch (error) 
      
    {
      
        console.error("Error ", error);
      
        return null;
    }
}

//----------------------------------------------------------------------------------------------------------------------------
//function 21
function initApp() 
{
  
  
    initPage().then(([u1, s]) => 
      {
        let sm = document.getElementById("selectMenu");
        if (sm) 
        {
          
            sm.appendChild(s);
          
          
          
            sm.addEventListener("change",selectMenuChangeEventHandler,false);
          
        }
    });
}

document.addEventListener("DOMContentLoaded", initApp, false);






