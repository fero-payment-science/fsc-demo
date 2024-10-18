/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAnalysis } from "@/contexts/analysis-context";
import { useCheckout } from "@/contexts/checkout-context";
import { useUpstreamData } from "@/contexts/upstream-data-context";
import { useEffect } from "react";
import UserLocation from "./_modules/user-location";
import styles from "./data-grid.module.css";
import GagueModule from "./_modules/Gague";
import { AttributeAges } from "./_modules/attribute-ages";
import IpData from "./_modules/ip-data";
import AccountData from "./_modules/account-data";
import spinner from "../../../../public/loaders/spinner-grey.svg";
import Image from "next/image";

export default function AnalysisPage() {
  const { ipAddress } = useCheckout();
  const { getAnalysis } = useAnalysis();
  const { isLoaded } = useUpstreamData();
  useEffect(() => {
    if (ipAddress === "") return;
    getAnalysis(ipAddress);
  }, [ipAddress]);

  return (
    <div className="w-full h-full grow flex items-center justify-evenly">
      {!isLoaded ? (
        <div className="flex flex-col items-center gap-2">
          <Image
            alt={"loader"}
            data-testid="loader"
            src={spinner}
            height={60}
            width={60}
          />
          <p>Loading analysis data...</p>
        </div>
      ) : (
        <div className={styles.grid}>
          <AccountData />
          <GagueModule
            className="gague"
            title={"Fraud Risk Score"}
            variant={"fraud"}
          />
          <GagueModule
            className="gague2"
            title={"Abandonment Rate Score"}
            variant={"abandonment"}
          />
          <UserLocation />
          <AttributeAges />
          <IpData />
        </div>
      )}
    </div>
  );
}
