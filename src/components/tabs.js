import axios from 'axios';


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const Tabs = (topics) => {
  
  const title = document.createElement('div');
   let newvariables = [];
      for(let i = 0; i < topics.length; i++)
       { let item,[i] = document.createElement('div');
       item,[i].textContent = topics[i]
        // console.log(item,[i]);
         newvariables.push(item,[i]);
          item,[i].classList.add('tab');
           title.appendChild(item,[i]); }
          // console.log(newvariables)
           const item1 = document.createElement('div');
            const item2 = document.createElement('div');
             const item3 = document.createElement('div');
              const item4 = document.createElement('div');
               const item5 = document.createElement('div');
                title.classList.add('topics');
                 item1.classList.add('tab');
                  item2.classList.add('tab');
                   item3.classList.add('tab');
                    item4.classList.add('tab');
                     item5.classList.add('tab');
                      return title }


  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  console.log (Tabs);
  const tabsAppender = (selector) => {

  const entryPoint = document.body.querySelector(`${selector}`)
  axios.get(`http://localhost:5000/api/topics`).then(res => { console.log(res.data.topics.length);
     console.log(res.data.topics);
   let newvariables = [];
    res.data.topics.forEach(element => { newvariables.push(element)});
       const newTabs = Tabs(newvariables);
        entryPoint.appendChild(newTabs)}).catch(err => { console.log(err)});
        }
          
export { Tabs, tabsAppender }
