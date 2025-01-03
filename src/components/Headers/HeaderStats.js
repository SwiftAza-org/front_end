import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      <div className="relative bg-primary-color md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statTitle="$350,875.90"
                  statArrow="up"
                  // statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescription="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      
    </>
  );
}
