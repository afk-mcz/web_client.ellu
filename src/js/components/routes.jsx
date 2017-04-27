import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from './header.jsx';
import Soon from './soon.jsx';

import Home from '../containers/home.js';

import AboutList from '../containers/about__list.js';
import AboutSingle from '../containers/about__single.js';

import DiaryList from '../containers/diary__list.js';
import DiarySingle from '../containers/diary__single.js';

import CvSingle from '../containers/cv__single.js';

import LigojList from '../containers/ligoj__list.js';

import ProjectList from '../containers/project__list.js';
import ProjectSingle from '../containers/Project.js';

import ReactGA from 'react-ga';
import { StickyContainer, Sticky } from 'react-sticky';

// TODO: React router 4 fix https://github.com/react-ga/react-ga/issues/122
ReactGA.initialize('UA-43222844-2');
function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

const Routes = () => (
    <Router>
        <StickyContainer>
            <Header></Header>
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
            >
                <main>
                    <div className="wrapper">
                        <Switch>

                            <Route exact path="/projects" component={ProjectList} />
                            <Route path="/projects/:id" component={ProjectSingle} />

                            <Route exact path="/about" component={AboutList} />
                            <Route path="/about/:id" component={AboutSingle} />

                            <Route exact path="/cv" component={CvSingle} />

                            <Route exact path="/diary" component={DiaryList} />
                            <Route path="/diary/:id" component={DiarySingle} />

                            <Route path="/ligoj" component={LigojList} />

                            <Route component={Home} />
                        </Switch>
                    </div>
                </main>
            </CSSTransitionGroup>
        </StickyContainer>
    </Router>
);

Routes.propTypes = {
    pathname: PropTypes.string,
};

export default Routes;
