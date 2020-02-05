import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Radio, Button, Tree} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../styles/hiw.css'
const { Meta } = Card;
const { TreeNode } = Tree;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class HowItWorksContainer extends Component {

    state = {
        gData,
        expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
      };

    onDragEnter = info => {
        console.log(info);
        // expandedKeys 
        // this.setState({
        //   expandedKeys: info.expandedKeys,
        // });
      };

      onDrop = info => {
        console.log(info);
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    
        const loop = (data, key, callback) => {
          data.forEach((item, index, arr) => {
            if (item.key === key) {
              return callback(item, index, arr);
            }
            if (item.children) {
              return loop(item.children, key, callback);
            }
          });
        };
        const data = [...this.state.gData];
    
        // Find dragObject
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
          arr.splice(index, 1);
          dragObj = item;
        });
    
        if (!info.dropToGap) {
          // Drop on the content
          loop(data, dropKey, item => {
            item.children = item.children || [];
            // where to insert 
            item.children.push(dragObj);
          });
        } else if (
          (info.node.props.children || []).length > 0 && // Has children
          info.node.props.expanded && // Is expanded
          dropPosition === 1 // On the bottom gap
        ) {
          loop(data, dropKey, item => {
            item.children = item.children || [];
            // where to insert 
            item.children.unshift(dragObj);
          });
        } else {
          let ar;
          let i;
          loop(data, dropKey, (item, index, arr) => {
            ar = arr;
            i = index;
          });
          if (dropPosition === -1) {
            ar.splice(i, 0, dragObj);
          } else {
            ar.splice(i + 1, 0, dragObj);
          }
        }
    
        this.setState({
          gData: data,
        });
      };

  render () {

    const loop = data =>
      data.map(item => {
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={item.title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} />;
      });

    return (
            <div>
              <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <div style={{marginLeft:'1rem'}}>
                        <div style={{marginLeft:'5px', marginTop:'20px'}}>
                            <h2 className="about">
                                <strong>
                                    How Can Veelancing help ?
                                </strong>
                            </h2>
                        </div>
                        <Row>
                            <Col xs={24} lg={12} xxl={12}>
                                <div className="paragraphs" style={{marginTop: '10%', color: 'rgba(0, 37, 70, 0.74)'}}>
                                    <Radio.Group>
                                    <Radio.Button className='hiw-toggle-btn' value="job"><div className={'btn-text-hiw'}><span   >I want a job</span></div></Radio.Button>
                                    <Radio.Button className='hiw-toggle-btn1' value="hire"><div className={'btn-text-hiw1'}><span>I want to hire</span></div></Radio.Button>
                                    </ Radio.Group>
                                </div>
                                <div className={'hiw-text'} >
                                    <p>Freelancing has never been easier.
                                        Here, you can find the job you love from over
                                        85 different categories.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={24} lg={12} xxl={12} >
                                <div >
                                    <img style={{width: '440px'}} src={'../../static/images/for_freelancers_imagery@2x.webp'} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    type='normal'
                                    className= {'browse-btn-hiw'} 
                                >
                                    <div className={'browse-btn-text'} ><span>Browse Jobs</span></div>
                                </Button>
                            </Col>
                        </Row>
                        <div className={'how-it-works-ideas'}>
                            <Row>
                                <Col span={24}>
                                    <div className={'hiw-text-title'} >How It Works</div>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col xs={24} lg={12} xxl={6}>
                                    <Card
                                        bordered={true}
                                        className={'hiw-cards'}
                                        title={<div className={'card-title'} >Create your profile</div>}
                                        style={{height: '360px'}}
                                    >
                                        <Meta
                                            description=
                                                {<div className={'card-description'} >
                                                    <p>
                                                        Register for free and build your Veelancing profile by adding your skills,
                                                        experience, education, hourly or daily rate, and a profile picture.
                                                    </p>
                                                    <p>
                                                        All your data is stored safely, and you are in full control of it, at any given time.
                                                    </p>
                                                </div>}
                                            avatar={<div><FontAwesomeIcon icon={['fas', 'fa-dice-one']} /></div>}
                                        />
                                    </Card>
                                </Col>
                                <Col xs={24} lg={12} xxl={6}>
                                    <Card
                                        bordered={true}
                                        className={'hiw-cards'}
                                        title={<div className={'card-title'} >Find the job you love</div>}
                                        style={{height: '360px'}}
                                    >
                                        <Meta
                                            description=
                                                {<div className={'card-description'} >
                                                    <p>
                                                        Search and apply for jobs that fit your needs or accept offers directly from customers,
                                                        and receive notifications when new opportunities occur.
                                                    </p>
                                                    <p>
                                                        Veelancing has over 85 different job categories !
                                                    </p>
                                                </div>}
                                            avatar={<div><FontAwesomeIcon icon={['fas', 'fa-dice-one']} /></div>}
                                        />
                                    </Card>
                                </Col>
                                <Col xs={24} lg={12} xxl={6}>
                                    <Card
                                        bordered={true}
                                        className={'hiw-cards'}
                                        title={<div className={'card-title'} >Settle your own terms</div>}
                                        style={{height: '360px'}}
                                    >
                                        <Meta
                                            description=
                                                {<div className={'card-description'} >
                                                    <p> After being awarded with the job, use our Smart Contract feature
                                                        to agree and set the terms of collaboration with your customer
                                                    </p>
                                                    <p>
                                                        This will allow a peer-topeer interaction, eliminating third party intervention.
                                                    </p>
                                                </div>}
                                            avatar={<div><FontAwesomeIcon icon={['fas', 'fa-dice-one']} /></div>}
                                        />
                                    </Card>
                                </Col>
                                <Col xs={24} lg={12} xxl={6}>
                                    <Card
                                        bordered={true}
                                        className={'hiw-cards'}
                                        style={{height: '360px'}}
                                        title={<div className={'card-title'} >Get payed instantly</div>}

                                    >
                                        <Meta
                                            description=
                                                {<div  className={'card-description'}>
                                                    <p> The payment will be made in Tokens within 48 hours after completing the job.
                                                        Exchange your tokens in any currency and cryptocurrency available, and transfer your income anytime.
                                                        <br />
                                                        <a style={{color: '#008D7F'}} href={'#'}> More about Tokens & Exchange</a>
                                                    </p>
                                                </div>}
                                            avatar={<div><i className="fas fa-dice-one"></i></div>}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                  </Col>
              </Row>
              <div style={{backgroundColor:"rgb(227, 227, 227)",paddingTop:'90px',paddingBottom:'50px' }}>
                    <Row>
                        <Col xs={{ span: 21, offset: 2 }} sm={12} md={{span:12,offset:0}} lg={{span:7, offset:3}} xl={{span:9, offset:2}} xxl={{ span: 9, offset:3}}>
                            <div >
                                <h2 className="safe-secure-envrionment">
                                    A Safe & Secure Enviroment
                                </h2>
                                <div className="" style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    <span className="hiw-descr">
                                    If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is one of the options you won’t resist. 
                                    Printing is a widely use process in making printed materials that are used for advertising. 
                                    Brochure, catalogs, flyers, banners, posters, and booklets are some of several examples.
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 19, offset: 3 }} sm={12} md={{ span: 11,offset:1 }} lg={10} xl={9} xxl={{ span: 10 }}>
                            <div>
                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/communicate_directly.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    Direct Customer Communication
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/get_paid_instantly.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title">
                                                    Instantly Payment With Tokens   
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/smart_contracts.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    Flexible Smart Contracts
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  src="../../static/images/exchange_money.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    Crypto Exchange Market  
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  src="../../static/images/smart_contracts.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    High Level Security
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                    <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/exchange_money.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title">
                                                    Transparent Community
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={'be-part'} >
                    <div className={'be-part-title'} ><span>Be part of the Veelancing community!</span></div>
                    <Button type={'primary'} className={'be-part-btn'} >
                        <div className={'be-part-btn-text'}><span>Join as a Freelancer</span></div>
                    </Button>
                    <div style={{marginTop: '3%'}} ><span style={{textAlign: 'center', color: '#FFFFFF'}} >or <strong><a href='#' style={{color: '#FFFFFF'}} >Hire Experts</a></strong></span></div>
                </div>

                <div>
                <Tree
                    className="draggable-tree"
                    defaultExpandedKeys={this.state.expandedKeys}
                    draggable
                    blockNode
                    onDragEnter={this.onDragEnter}
                    onDrop={this.onDrop}
                >
                    {loop(this.state.gData)}
                </Tree>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
  }
}

HowItWorksContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(HowItWorksContainer)
