import React, { Component } from 'react';
import { Sparklines, SparklinesCurve, SparklinesLine, SparklinesReferenceLine, SparklinesNormalBand } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} width={200} height={120}  >
        <SparklinesCurve color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
}
