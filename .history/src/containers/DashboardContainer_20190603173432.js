import React, { Component } from 'react'
import {
  NumberCard,
  Quote,
  Sales,
  Weather,
  RecentSales,
  Comments,
  Completed,
  Browser,
  Cpu,
  User,
} from '../src/components'
import {
  Card
} from 'antd';
class DashboardContainer extends Component {

  constructor(props){
    super(props)
  }
   render() {
    const { avatar, username, dashboard, loading } = this.props
    const {
      weather,
      sales,
      quote,
      numbers,
      recentSales,
      comments,
      completed,
      browser,
      cpu,
      user,
    } = dashboard

    const numberCards = numbers.map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    ))
     return (   
      <Page
      // loading={loading.models.dashboard && sales.length === 0}
      className={styles.dashboard}
    >
      <Row gutter={24}>
        {numberCards}
        <Col lg={18} md={24}>
          <Card
            bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Sales data={sales} />
          </Card>
        </Col>
        <Col lg={6} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card
                bordered={false}
                className={styles.weather}
                bodyStyle={{
                  padding: 0,
                  height: 204,
                  background: Color.blue,
                }}
              >
                <Weather
                  {...weather}
                  loading={loading.effects['dashboard/queryWeather']}
                />
              </Card>
            </Col>
            <Col lg={24} md={12}>
              <Card
                bordered={false}
                className={styles.quote}
                bodyStyle={{
                  padding: 0,
                  height: 204,
                  background: Color.peach,
                }}
              >
                <ScrollBar>
                  <Quote {...quote} />
                </ScrollBar>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <RecentSales data={recentSales} />
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <ScrollBar>
              <Comments data={comments} />
            </ScrollBar>
          </Card>
        </Col>
        <Col lg={24} md={24}>
          <Card
            bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Completed data={completed} />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <Browser data={browser} />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <ScrollBar>
              <Cpu {...cpu} />
            </ScrollBar>
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card
            bordered={false}
            bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}
          >
            <User {...user} avatar={avatar} username={username} />
          </Card>
        </Col>
      </Row>
    </Page>
  )
}
}

Dashboard.propTypes = {
avatar: PropTypes.string,
username: PropTypes.string,
dashboard: PropTypes.object,
loading: PropTypes.object,
}
     

export default (DashboardContainer) 