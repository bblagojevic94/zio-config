/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('intro/intro_index')}>Introduction</Button>
            <Button href={docUrl('read/read_index')}>Read Config</Button>
            <Button href={docUrl('doc/doc_index')}>Create Details</Button>
            <Button href={docUrl('report/report_index')}>Report</Button>
            <Button href={docUrl('write/write_index')}>Write</Button>
            <Button href="https://github.com/zio/zio-config" target="_blank" >GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'A single composable description of the configuration \n \t It can read, write, report and document',
            title: 'Composable description',
          },
           {
              content: "Given a config description, read the config from various sources",
              title: 'Read the configuration',
            },
           {
             content: 'Given the same description,safely write the config back - resulting in unfailed reads',
             title: 'Write the configuration back',
           },
           {
             content: "Handles multiple, composable, prioritised sources, to read the configuration from.",
             title: 'Multiple composable sources',
           }
        ]}
      </Block>
    );

    const Features2 = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Given the same description, auto-create a man-page - for your ops team',
            title: 'Auto-generate docs',
          },
           {
              content: "Details can carry the value of each configuration parameter - a detailed report",
              title: 'Auto generate report',
            }
        ]}
      </Block>
    );



    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
        </div>
         <div className="mainContainer">
                  <Features2 />
                </div>
      </div>
    );
  }
}

module.exports = Index;
