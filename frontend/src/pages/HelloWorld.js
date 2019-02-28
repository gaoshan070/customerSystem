import { Card } from "antd";

export default () => {
  const style = {
    width: "400px",
    margin: "30px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #e8e8e8"
  };

  return (
    <Card style={style}>
      <Card.Meta
        title="Demo Project"
        description="This is a demo project for development assess"
      />
    </Card>
  );
};
