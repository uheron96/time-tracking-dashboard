"use client";

import Image from "next/image";
import styles from "./styles/page.module.css";
import reportCardStyle from "./styles/reportCard.module.css";
import { TimeCard, TimeCardProps, TimeCardType } from "./timeCard";
import timeData from "./data.json";
import { useState } from "react";

export default function Home() {
  const sortedData = timeData.sort((a, b) => a.title.localeCompare(b.title));
  const dailyData = sortedData.map(({ title, timeframes }) => ({
    title,
    ...timeframes.daily,
  }));
  const weeklyData = sortedData.map(({ title, timeframes }) => ({
    title,
    ...timeframes.weekly,
  }));
  const monthlyData = sortedData.map(({ title, timeframes }) => ({
    title,
    ...timeframes.monthly,
  }));

  const [activeTab, setActiveTab] = useState<TimeCardProps["type"]>(
    TimeCardType.day
  );

  const getTabsContent = (type: TimeCardType) => {
    switch (type) {
      case TimeCardType.day:
        return dailyData.map((data) => {
          return (
            <TimeCard
              key={data.title}
              type={TimeCardType.day}
              title={data.title}
              hours={data.current}
              prevValue={data.previous}
            />
          );
        });
      case TimeCardType.week:
        return weeklyData.map((data) => {
          return (
            <TimeCard
              key={data.title}
              type={TimeCardType.week}
              title={data.title}
              hours={data.current}
              prevValue={data.previous}
            />
          );
        });
      case TimeCardType.month:
        return monthlyData.map((data) => {
          return (
            <TimeCard
              key={data.title}
              type={TimeCardType.month}
              title={data.title}
              hours={data.current}
              prevValue={data.previous}
            />
          );
        });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={`${reportCardStyle.reportCard} ${styles.reportCard}`}>
          <div className={reportCardStyle.reportCardHeader}>
            <Image
              className={reportCardStyle.avatar}
              width={100}
              height={100}
              src="/images/image-jeremy.png"
              alt="Profile Image"
            />
            <div className={reportCardStyle.reportCardHeaderInner}>
              <h2 className={reportCardStyle.nameDescriptionText}>
                Report for
              </h2>
              <h1 className={reportCardStyle.nameText}>Jeremy Robson</h1>
            </div>
          </div>

          <div className={reportCardStyle.reportCardBottom}>
            <h3
              className={`${reportCardStyle.timePeriodText} ${
                activeTab === TimeCardType.day && reportCardStyle.tabSelected
              }`}
              onClick={() => setActiveTab(TimeCardType.day)}
            >
              Daily
            </h3>
            <h3
              className={`${reportCardStyle.timePeriodText} ${
                activeTab === TimeCardType.week && reportCardStyle.tabSelected
              }`}
              onClick={() => setActiveTab(TimeCardType.week)}
            >
              Weekly
            </h3>
            <h3
              className={`${reportCardStyle.timePeriodText} ${
                activeTab === TimeCardType.month && reportCardStyle.tabSelected
              }`}
              onClick={() => setActiveTab(TimeCardType.month)}
            >
              Monthly
            </h3>
          </div>
        </div>
        <div className={reportCardStyle.card}></div>

        <div className={styles.timeCardsContainer}>
          {getTabsContent(activeTab)}
        </div>
      </div>
    </div>
  );
}
