import React from 'react'
import { ResponsiveLine } from '@nivo/line'
//npm i @nivo/core @nivo/line
//import key77 from '../../static/key77';

//const data = key77

const NivoLine_compare= (props) =>
(
    <ResponsiveLine
        data={props.data}
        margin={{ top: 50, right: 150, bottom: 120, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        //아래 날짜 옵션
        axisBottom={{
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 40,
            //legend: 'Date',
            legendOffset: 48,
            legendPosition: 'middle'
        }}
        //왼쪽 수치 옵션
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            //legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        //포인트 옵션
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}

        enableArea={true}
        areaOpacity={0.3}

        useMesh={true}
        //오른쪽 목록 옵션
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
export default NivoLine_compare
