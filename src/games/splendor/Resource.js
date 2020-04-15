import React from "react";
import { oneOf, string, number } from "prop-types";
import { Icon } from "semantic-ui-react";
import { RESOURCES, RESOURCES_CONFIG } from "./config";

import styles from "./Resource.module.css";

const propTypes = {
  type: oneOf(RESOURCES).isRequired,
  color: string,
  size: number,
};
const Resource = ({ type, color }) => {
  const { icon, color: defaultColor } = RESOURCES_CONFIG[type];
  return <Icon name={icon} className={styles.icon} style={{ color: color || defaultColor }} />;
};

Resource.propTypes = propTypes;

export default Resource;
