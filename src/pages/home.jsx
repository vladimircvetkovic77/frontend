import React, {Component} from 'react';
import {connect} from "react-redux";
import {Layout} from 'antd';
import AppHeader from "../components/header";
import {loadTrendingGiphy} from "../store/trendingGiphy";
import {loadSearchGiphy} from "../store/searchGiphy";
import Giphy from "../components/giphy";
import AppForm from "../components/form";

const {Content, Footer} = Layout;

class Home extends Component {

  componentDidMount() {
    this.props.loadTrendingGiphy()
  }

  render() {
    const {trendingGiphy, searchGiphy} = this.props
    return (
      <React.Fragment>
        <Layout className="layout">
          <AppHeader/>
          <Giphy data={trendingGiphy} loadingLabel="Loading trending ..." title="Trending Giphy"/>
          <Content style={{padding: '50px 50px', height: '300px',display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              <AppForm />
          </Content>
          <Giphy data={searchGiphy} loadingLabel="Loading search ..." title="Search Giphy"/>
          <Footer style={{textAlign: 'center'}}>Created as a part of testing process ©2021</Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  trendingGiphy: state.entities.trendingGiphy,
  searchGiphy: state.entities.searchGiphy,
  loadingSearchGiphy: state.entities.searchGiphy.loading,
  loadingTrendingGiphy: state.entities.trendingGiphy.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadTrendingGiphy: () => dispatch(loadTrendingGiphy()),
  loadSearchGiphy: () => dispatch(loadSearchGiphy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);