import { Component, createRef } from 'react'
import Chart from 'chart.js'

export default class Canvas extends Component {
    constructor(props) {
        super(props)
        
        this.canvasRef = createRef() 
    }

    componentDidMount() {
        let canvas = this.canvasRef.current
        let ctx = canvas.getContext('2d')
        Chart.defaults.scale.gridLines.display = false;
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                    label: '',
                    backgroundColor: '#00000020',
                    borderColor: '#00000090',
                    data: this.data,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false
                },
                elements: {
                    line: {
                        tension: 0
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        })
    }

    componentDidUpdate() {
        this.chart.data.labels = this.props.labels
        this.chart.data.datasets[0].data = this.props.data
        this.chart.update()
    }

    render() {
        
        return (
            <canvas ref={this.canvasRef} />
        )
    }
}