import './App.css'
import gptlogo from './assets/chatgpt.svg';
import magIcon from './assets/message.svg';
import home from './assets/home.svg';
import addBtn from './assets/add-30.png';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';


function App() {
  

  return (
    <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptlogo} alt="Logo" className="logo" /><span className="brand"><big>CHatGPT</big></span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={magIcon} alt="Query" />What is Programing ?</button><br />
            <button className="query"><img src={magIcon} alt="Query" />How to use an API ?</button>
          </div>

        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade " className="listItemsImg" />Upgrade to pro</div>

        </div>

      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam adipisci, in reiciendis nulla rem exercitationem iusto facilis placeat nemo! Nemo!</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi optio autem possimus odit doloribus dicta consequatur neque, enim blanditiis, cum voluptate tempora. Ad animi aspernatur, alias similique id totam consequuntur. Expedita optio recusandae quisquam voluptate, placeat sequi pariatur quia commodi adipisci rem temporibus, non saepe voluptatibus. Qui eligendi delectus est doloremque voluptatum rerum, sed, libero autem, assumenda ratione cum error totam possimus aliquam quae. Vitae dolore voluptatum autem optio eum vel ipsam officia odio consequuntur impedit quia adipisci libero illo reiciendis, veniam nesciunt consequatur. Corporis voluptates asperiores cum iusto velit veniam voluptas, aliquam fuga veritatis numquam, pariatur, possimus quaerat?</p>
          </div>
          

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'/><button className="send"><img src={sendBtn} alt="send" /></button>
          </div>
          <p>ChatGPT my produce inaccurate information about people,places, or facts. ChatGPT August 20 version.</p>
        </div>

      </div>

      
    </div>
  )
}

export default App
