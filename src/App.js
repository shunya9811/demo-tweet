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
  constructor(props) {
    super(props)
    this.handleName = this.handleName.bind(this);
    this.handleId = this.handleId.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      tentName: '',
      tentId: '',
      tentTweet: '',
      tentIcon: ''
    };
  }
  
  handleName(e){
    this.setState({
      tentName: e.target.value
    })
  }

  handleId(e){
    this.setState({
      tentId: e.target.value
    })
  }

  handleTweet(e){
    this.setState({
      tentTweet: e.target.value
    })
  }

  handleIcon(e){
    this.setState({
      tentIcon: e.target.value
    })
  }

  handleClick(){
    this.props.onClickCreateTweet(this.state.tentName, this.state.tentId, this.state.tentTweet, this.state.tentIcon);
  }
  
  render() {
    const name = this.state.tentName;
    const id = this.state.tentId;
    const tweet = this.state.tentTweet;
    const icon = this.state.tentIcon;

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
              onChange={this.handleName}
            />
          </div>
          <div>
            <h3>id</h3>
            <input 
              type="text"
              placeholder="taro_tweet"
              value={id}
              className='text'
              onChange={this.handleId}
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
            onChange={this.handleTweet}
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
              onChange={this.handleIcon}
            />
          </div>
          <img src={twitter} className='inputIcon' alt='icon'></img>
          <button type="button" className='btn' onClick={this.handleClick}>Create Tweet</button>
        </div>
      </form>
    )
  }
}

class TweetImage extends React.Component{
  render() {
    const today = new Date();
    
    let month = ("0" + today.getMonth() + 1).slice(-2);
    let days = ("0" + today.getDate()).slice(-2);
    let stimeStamp = month + "月" + days + "日";

    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let years = today.getFullYear();
    let dtimeStamp = hours + ":" + minutes + "・" + years + "年" + stimeStamp;

    const name = this.props.name;
    const id = this.props.id;
    const tweet = this.props.tweet;
    //const icon = this.props.icon;

    return (
      <div>
        <div className='container'>
          <h3 style={{textAlign: 'center'}}>Simple</h3>
          <div className='simpleCard'>
            <img src={twitter} className='icon' alt='icon'></img>
            <div className='stweet'>
              <div className='stweetHeader'>
                <IconContext.Provider value={{color: '#1e90ff'}}>
                  <h3 style={{margin: "0.5rem 0"}}>{name}{" "}<BsFillPatchCheckFill/>{" "}</h3>
                </IconContext.Provider>
                <h3 style={{fontWeight: "200", margin: "0.5rem 0 "}}>@{id}・{stimeStamp}</h3>
                <h3 style={{fontWeight: "200", margin: "0.5rem 0", marginLeft: "auto"}}><BsThreeDots/></h3>
              </div>
              <div style={{margin: "0.2rem 0.2rem"}}>{tweet}</div>
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
                  <h3 style={{margin: "0.5rem 0"}}>{name}{" "}<BsFillPatchCheckFill/></h3>
                </IconContext.Provider>
                <h3 style={{fontWeight: "200", margin: "0.5rem 0 "}}>@{id}</h3>
              </div>
              {/*親要素にdisplay: flexからのmarginLeft: autoを子要素にいれることで、ひとつだけ端に寄せられる*/}
              <h3 style={{fontWeight: "200", margin: "0.5rem 0", marginLeft: "auto"}}><BsThreeDots/></h3>
            </div>
            <h4 style={{margin: "0.4rem 0.2rem"}}>{tweet}</h4>
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
    super(props);
    this.onhandleTweetContent = this.onhandleTweetContent.bind(this);
    this.state = {
      name : 'Twitter',
      id: 'Twitter',
      tweet: 'we are working on an deit button.',
      icon: twitter,
      evaluation: {
        retweets: 118.3,
        quote: 127.8,
        likes: 1.3
      }
    }
  }

  onhandleTweetContent(name, id, tweet, icon){
    this.setState({name, id, tweet, icon})
    //評価部分をランダムで算出して表示させる
  }

  render() {
    const name = this.state.name;
    const id = this.state.id;
    const tweet = this.state.tweet;
    const icon = this.state.icon;
    const retweets = this.state.evaluation.retweets;
    const quote = this.state.evaluation.quote;
    const likes = this.state.evaluation.likes;

    return (
      <div>
        <h1 style={{textAlign: "center", margin: "0"}}>Demo Tweet</h1>
        <hr width="30%" align="center"></hr>
        <div style={{marginLeft : '5rem'}}>
          <h2>Create Tweet</h2>
          <div className='componentFrame'>
            <CreatTweet
              onClickCreateTweet = {this.onhandleTweetContent}
            />
            <br/>
          </div>
        </div>
        <div style={{marginLeft : '5rem'}}>
          <h2>Tweet Image <span style={{fontWeight: "200"}}>(After Create tweet button)</span></h2>
          <div className='componentFrame'>
            <TweetImage
              name={name}
              id={id}
              tweet={tweet}
              icon={icon}
              retweets={retweets}
              quote={quote}
              likes={likes}
            />
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
