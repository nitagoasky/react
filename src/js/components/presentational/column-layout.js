import React from "react";
import PropTypes from "prop-types";

const ColumnLayout = ({width}) => (
    <div style={{width:width,float:'left'}}>
        we
    </div>
);
ColumnLayout.propTypes = {
    width: PropTypes.string.isRequired,
};
export default ColumnLayout;
