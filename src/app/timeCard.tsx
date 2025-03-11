import timeCardStyles from "./styles/timeCard.module.css";
import Image from "next/image";

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
};

export const TimeCard = ({ type, hours, prevValue, title }: TimeCardProps) => {
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

  const getHeaderStyles = () => {
    switch (title) {
      case "Work":
        return { color: "var(--light-orange)", image: "/images/icon-work.svg" };
      case "Play":
        return { color: "var(--soft-blue)", image: "/images/icon-play.svg" };
      case "Study":
        return { color: "var(--light-red)", image: "/images/icon-study.svg" };
      case "Exercise":
        return {
          color: "var(--lime-green)",
          image: "/images/icon-exercise.svg",
        };
      case "Social":
        return { color: "var(--violet)", image: "/images/icon-social.svg" };
      case "Self Care":
        return { color: "var(--yellow)", image: "/images/icon-self-care.svg" };
      default:
        return { color: "var(--light-orange)", image: "/images/icon-work.svg" };
    }
  };

  return (
    <div className={timeCardStyles.timeCard}>
      <div
        className={timeCardStyles.colorHeader}
        style={
          { "--header-color": getHeaderStyles()?.color } as React.CSSProperties
        }
      >
        <Image
          className={timeCardStyles.headerImage}
          width={85}
          height={85}
          src={getHeaderStyles()?.image}
          alt="Header image"
        />
      </div>
      <div className={timeCardStyles.inner}>
        <div className={timeCardStyles.row}>
          <h1 className={timeCardStyles.headerText}>{title}</h1>
          <Image
            className={timeCardStyles.settingsIcon}
            width={20}
            height={5}
            src="/images/icon-ellipsis.svg"
            alt="Profile Image"
          />
        </div>

        <div className={timeCardStyles.bottomContent}>
          <h2 className={timeCardStyles.hoursText}>{`${hours}hrs`}</h2>
          <h3 className={timeCardStyles.lastPeriodText}>{`${getTimeString(
            type
          )} ${prevValue}hrs`}</h3>
        </div>
      </div>
    </div>
  );
};
