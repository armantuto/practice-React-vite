import { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import React from "react";
import { SiMaterialdesignicons } from "react-icons/si";
export interface PointOfInterest {
  id: number;
  name: string;
  description: string;
}

export interface City {
  id: number;
  name: string;
  description: string;
  numberOfPointsOfInterest: number;
  pointsOfInterest: PointOfInterest[];
}

interface Cards {
  name: string;
  icon: any;
}

const CardsData: Cards[] = [
  {
    name: "Protocols",
    icon: <SiMaterialdesignicons />,
  },
  { name: "Productos", 
    icon: <SiMaterialdesignicons /> },
];

function Appiii() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7169/api/cities")
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>City Info</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <strong>{city.name}</strong> — {city.description} —{" "}
            {city.numberOfPointsOfInterest}
            <ul>
              {city.pointsOfInterest?.map((point) => (
                <li key={point.id}>
                  {point.name} : {point.description}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Row gutter={16}>
        {CardsData.map((card, index) => (
          <Col span={8} key={index}>
            <Card title={card.name} variant="borderless">
              {card.icon}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Appiii;
