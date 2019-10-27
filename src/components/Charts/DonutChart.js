import React, { Component } from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(import('react-apexcharts'), {
    ssr: false,
})

export class DonutChart extends Component {

    constructor (props) {
        super(props);

        this.state = {
            options: {
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%"
                    },
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                plotOptions: {
                    enabled:false,
                    pie: {
                        donut: {
                            labels: {
                                show: false,
                            },

                        },
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                tooltip: {
                    enabled: true,
                    y: {
                        formatter: function(val) {
                            return val + ".00" + " "
                        },
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    }
                },
                legend: {
                    show:false,
                    position: 'left',
                    offsetY: 0,
                    height: 230,
                }
            },
            series: [20,30,10,40],
            labels: ['VBRT','USD'],
        }
    }

    render () {
        return (

            <div id="donut">
                <div className="chart-wrap">
                    <div id="chart">
                        <div>
                            <ul>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                            </ul>
                            <Chart options={this.state.options} labels={this.state.labels} series={this.state.series} type="donut"
                                   width="380"/>
                        </div>

                    </div>
                </div>
            </div>)
    }
}
