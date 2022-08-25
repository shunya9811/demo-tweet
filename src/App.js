import React from 'react';
import './App.css';
import twitter from './images/twitter.jpg'
import { IconContext } from 'react-icons'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

class CreatTweet extends React.Component{
  render() {
    const name = this.props.name;
    const id = this.props.id;
    const tweet = this.props.tweet;
    const icon = this.props.icon;

    return (
      <form>
        <div className='inputInline'>
          <div>
            <h3>name</h3>
            <input
              type="text"
              placeholder="taro"
              value={name}
              className='text'
            />
          </div>
          <div>
            <h3>id</h3>
            <input 
              type="text"
              placeholder="taro_tweet"
              value={id}
              className='text'
            />
          </div>          
        </div>
        <div>
          <h3>Textarea</h3>
          <textarea 
            name='tweet'
            placeholder='Tweet contents'
            className='textarea text'
            value={tweet}
          />
        </div>
        <div className='inputInline'>
          <div>
            <h3>icon</h3>
            <input 
              type='text'
              placeholder='twitter'
              value={icon}
              className='text'
            />
          </div>
          <img src={twitter} className='inputIcon' alt='icon'></img>
          <button type="button" className='btn'>Create Tweet</button>
        </div>
      </form>
    )
  }
}

class TweetImage extends React.Component{
  render() {
    const today = new Date();
    
    let month = ("0" + today.getMonth()).slice(-2);
    let days = ("0" + today.getDay()).slice(-2);
    let stimeStamp = month + "月" + days + "日"

    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let years = today.getFullYear();
    let dtimeStamp = hours + ":" + minutes + "・" + years + "年" + stimeStamp;

    return (
      <div>
        <div className='container'>
          <h3 style={{textAlign: 'center'}}>Simple</h3>
          <div className='simpleCard'>
            <img src={twitter} className='icon' alt='icon'></img>
            <div className='stweet'>
              <div className='stweetHeader'>
                <IconContext.Provider value={{color: '#1e90ff'}}>
                  <h3 style={{margin: "0.5rem 0"}}>Twitter{" "}<BsFillPatchCheckFill/>{" "}</h3>
                </IconContext.Provider>
                <h3 style={{fontWeight: "200", margin: "0.5rem 0 "}}>@Twitter・{stimeStamp}</h3>
                <h3 style={{fontWeight: "200", margin: "0.5rem 0", marginLeft: "auto"}}><BsThreeDots/></h3>
              </div>
              <div style={{margin: "0.2rem 0.2rem"}}>we are working on an deit button.</div>
              <div className='stweetFooter'>
                <div><IoChatbubbleOutline/>118.3K</div>
                <div><FaRetweet/>127.8K</div>
                <div><AiOutlineHeart/>1.3M</div>
                <div><FiShare/></div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <h3 style={{textAlign: 'center'}}>Detail</h3>
          <div className='detailCard'>
            <div className='dtweetHeader'>
              <img src={twitter} className='icon' alt='icon'></img>
              <div style={{margin: "0 0 0 2rem"}}>
                <IconContext.Provider value={{color: '#1e90ff'}}>
                  <h3 style={{margin: "0.5rem 0"}}>Twitter{" "}<BsFillPatchCheckFill/></h3>
                </IconContext.Provider>
                <h3 style={{fontWeight: "200", margin: "0.5rem 0 "}}>@Twitter</h3>
              </div>
              <h3 style={{fontWeight: "200", margin: "0.5rem 0", marginLeft: "auto"}}><BsThreeDots/></h3>
            </div>
            <h4 style={{margin: "0.4rem 0.2rem"}}>we are working on an deit button.</h4>
            <div style={{margin: "0.8rem 0.2rem", fontWeight: "200"}}>{dtimeStamp}・Twitter for iPhone</div>
            <hr width="98%" align="center"></hr>
            <div className='dtweetEvaluation'>
              <div>118.3K<span style={{fontWeight: "200"}}>Retweets</span></div>
              <div>127.8K<span style={{fontWeight: "200"}}>Quote Tweets</span></div>
              <div>1.3M<span style={{fontWeight: "200"}}>Likes</span></div>
            </div>
            <hr width="98%" align="center"></hr>
            <div className='dtweetFooter'>
              <IconContext.Provider value={{size: "20px"}}>
                <div><IoChatbubbleOutline/></div>
                <div><FaRetweet/></div>
                <div><AiOutlineHeart/></div>
                <div><FiShare/></div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'Twitter',
      id: 'Twitter',
      tweet: 'we are working on an deit button.',
      icon: 'image',
      evaluation: {
        retweets: 118.3,
        quote: 127.8,
        likes: 1.3
      }
    }
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Demo Tweet</h1>
        <hr width="30%" align="center"></hr>
        <div style={{marginLeft : '5rem'}}>
          <h2>Create Tweet</h2>
          <div className='componentFrame'>
            <CreatTweet/>
            <br/>
          </div>
        </div>
        <div style={{marginLeft : '5rem'}}>
          <h2>Tweet Image <span style={{fontWeight: "200"}}>(After Create tweet button)</span></h2>
          <div className='componentFrame'>
            <TweetImage/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
