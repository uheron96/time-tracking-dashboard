import timeCardStyles from "./styles/timeCard.module.css";

export enum TimeCardType {
  day = "day",
  week = "week",
  month = "month",
}

export type TimeCardProps = {
  type: TimeCardType;
  title: string;
  hours: number;
  prevValue: number;
  headerColor: string;
};

export const TimeCard = ({
  type,
  headerColor,
  hours,
  prevValue,
  title,
}: TimeCardProps) => {
  const getTimeString = (type: TimeCardType) => {
    switch (type) {
      case TimeCardType.day:
        return "Yesterday - ";
      case TimeCardType.week:
        return "Last Week - ";
      case TimeCardType.month:
        return "Last Month - ";
    }
  };

  return (
    <div className={timeCardStyles.timeCard}>
      <div className={timeCardStyles.colorHeader}>
        <h1>{title}</h1>
        <h2>{hours}</h2>
        <h3>{`${getTimeString(type)} ${prevValue}hrs`}</h3>
      </div>
    </div>
  );
};
