/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import ApexCharts from 'apexcharts';
import objectPath from 'object-path';
import React, { useEffect, useMemo, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';

import { useHtmlClassService } from '../../../_metronic/layout';

export function GraphEvaluationTaches({ className }) {
  const [key, setKey] = useState("Mois");
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBasePrimary: objectPath.get(
        uiService.config,
        "js.colors.theme.base.primary"
      ),
      colorsThemeLightPrimary: objectPath.get(
        uiService.config,
        "js.colors.theme.light.primary"
      ),
      colorsThemeDanger: objectPath.get(
        uiService.config,
        "js.colors.theme.base.danger"
      ),
      colorsThemeWarning: objectPath.get(
        uiService.config,
        "js.colors.theme.base.warning"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily")
    };
  }, [uiService]);

  useEffect(() => {
    const element = document.getElementById("chartEvaluation");

    if (!element) {
      return;
    }

    const options = getChartOption(layoutProps);
    const chartnewUsers = new ApexCharts(element, options);
    chartnewUsers.render();
    return function cleanUp() {
      chartnewUsers.destroy();
    };
  }, [layoutProps]);


  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Évaluation des tâches
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            17 tâches en total
          </span>
        </h3>
        <div className="card-toolbar">
          <Tab.Container defaultActiveKey={key}>
            <Nav
              as="ul"
              onSelect={_key => setKey(_key)}
              className="nav nav-pills nav-pills-sm nav-dark-75"
            >
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Mois"
                  className={`nav-link py-2 px-4 ${
                    key === "Mois" ? "active" : ""
                  }`}
                >
                  Mois
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Semaine"
                  className={`nav-link py-2 px-4 ${
                    key === "Semaine" ? "active" : ""
                  }`}
                >
                  Semaine
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Jour"
                  className={`nav-link py-2 px-4 ${
                    key === "Jour" ? "active" : ""
                  }`}
                >
                  Jour
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </div>
      <div
          id="chartEvaluation"
          className="card-rounded-bottom bg-white "
          style={{ height: "300px" }}
        />
    </div>
  );
}


function getChartOption(layoutProps) {
  var options = {
    series: [
      {
        name: "graph 1",
        data: [4,2, 3, 3.1, 4.2, 3.5]
      },
      {
        name: "graph 2",
        data: [2, 4, 2, 2.5, 3.5, 2.5]
      },
      {
        name: "graph 3",
        data: [1, 1.8, 2.3, 1.5, 2.5, 2.0]
      },
    ],
    chart: {
      type: "area",
      height: 300,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {},
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "solid",
      opacity: 1
    },
    stroke: {
      curve: "smooth",
      show: false,
      width: 3,
      colors: [layoutProps.colorsThemeBasePrimary]
    },
    xaxis: {
      categories: ["1 Aug", "8 Aug", "15 Aug", "22 Aug", "29 Aug", "5 Sep"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3
        }
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      }
    },
    yaxis: {
      min: 0,
      max: 6,
      labels: {
        show: true,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0
        }
      },
      hover: {
        filter: {
          type: "none",
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0
        }
      }
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily
      },
      y: {
        formatter: function(val) {
          return  val ;
        }
      }
    },
    colors: [layoutProps.colorsThemeBasePrimary, layoutProps.colorsThemeDanger,layoutProps.colorsThemeWarning],
    markers: {
      colors: [layoutProps.colorsThemeLightPrimary],
      strokeColor: [layoutProps.colorsThemeBasePrimary],
      strokeWidth: 3
    }
  };
  return options;
}


