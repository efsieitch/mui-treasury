/* eslint-disable */
import React, { useState } from 'react';
import ElevatedTabs from 'components/tabs/ElevatedTabs';

const demoCode = `
  import React from 'react';
  import ElevatedTabs from './ElevatedTabs';
  
  const Demo = () => {
    const [index, onChange] = useState(0);
    return (
      <ElevatedTabs
        tabs={[
          { label: 'Data' },
          { label: 'Rules' },
          { label: 'Indexes' },
          { label: 'Usage' },
        ]}
        value={index}
        onChange={(e, i) => setIndex(i)}
      />
    );
  }
  
  export default Demo;
`;

ElevatedTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <ElevatedTabs
      tabs={[
        { label: 'Data' },
        { label: 'Rules' },
        { label: 'Indexes' },
        { label: 'Usage' },
      ]}
      value={index}
      onChange={(e, i) => setIndex(i)}
    />
  );
};

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  
  const useTabsStyles = makeStyles(({ spacing }) => {
    const tabsBackground = 'linear-gradient(60deg, #ab47bc, #8e24aa)';
    const indicatorBackground = 'rgba(255, 255, 255, .2)';
    const borderRadius = spacing(1);
    return {
      root: {
        width: '100%',
        borderRadius: spacing(1),
        background: tabsBackground,
        padding: 10,
        boxShadow: '0px 3px 15px rgba(34, 35, 58, 0.5)',
      },
      indicator: {
        height: '100%',
        borderRadius,
        backgroundColor: indicatorBackground,
      },
    };
  });
  
  const useTabStyles = makeStyles(({ breakpoints, spacing }) => {
    const tabsGutter = spacing(2);
    const labelColor = '#ffffff';
    return {
      root: {
        textTransform: 'initial',
        margin: \`0 \${tabsGutter}px\`,
        minWidth: 0,
        [breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      wrapper: {
        fontWeight: 'normal',
        letterSpacing: 0.5,
        color: labelColor,
      },
    };
  });
  
  const ElevatedTabs = ({ tabs, ...props }) => {
    const tabsClasses = useTabsStyles();
    const tabClasses = useTabStyles();
    return (
      <Tabs classes={tabsClasses} {...props}>
        {tabs.map(tab => (
          <Tab key={tab.label} classes={tabClasses} {...tab} />
        ))}
      </Tabs>
    );
  };
  
  ElevatedTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
      }),
    ),
  };
  ElevatedTabs.defaultProps = {
    tabs: [],
  };
  
  export default ElevatedTabs;

`;

ElevatedTabs.info = {
  name: 'Elevated Tabs',
  description: 'implement custom theme with elevated tabs',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/vmzjw3o5l5' },
    { label: 'Official Ex.', url: 'https://material-ui.com/components/tabs/' },
    { label: 'Tabs API', url: 'https://material-ui.com/api/tabs/' },
    { label: 'Tab API', url: 'https://material-ui.com/api/tab/' },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'ElevatedTabs.js',
      code: coreCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};

export default ElevatedTabs;
