import React from "react";

export const Invitation = () => {
  const alertArray = [
    {
      heading: "20",
      details: "DAY",
    },
    {
      heading: "50",
      details: "MINUTES",
    },
    {
      heading: "20",
      details: "SECONDS",
    },
  ];
  return (
    <>
      <div className="py-10 px-12 flex justify-center flex-col items-center">
        <h3 className="font-serif font-semibold text-2xl mb-6">
          INVITATION IS OPEN UNTIL 30TH OF APRIL{" "}
        </h3>

        <div className="flex gap-x-5 justify-center items-center text-center mb-10">
          {alertArray.map((item) => {
            return (
              <>
                <div className="flex gap-y-4 flex-col">
                  <div className="bg-[#1A1A1A]  relative p-10">
                    <div className="font-digi text-white text-7xl">
                      {item.heading}
                    </div>
                  </div>
                  <p className="font-serif text-2xl font-semibold">
                    {item.details}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        <div className="bg-[#1A1A1A] px-24 py-6">
          <h1 className="font-semibold text-4xl text-white">
            JOIN THE DISCUS COMMUNITY
          </h1>
        </div>

        <div className="flex gap-6">
          
          <div className="flex flex-col ">
            <img src="./assets/img1.png" className="h-[50vh] " alt="" />

            <div className="flex ">
              <div>
                <div>
                  <h1 className="font-oswo font-medium text-2xl">
                    Priority Acess
                  </h1>
                </div>

                <div>
                  <p className="font-serif w-full text-xs">
                    Be among the first to experience our exciting platform and
                    gain access to exclusive content, events, and opportunities
                    before anyone else!
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h1 className="font-oswo font-medium text-2xl">
                    Early Bird Invite
                  </h1>
                </div>

                <div>
                  <p className="font-serif text-xs">
                    Receive early invitations to events, workshops,
                    masterclasses, and networking opportunities, providing you
                    with unique chances to connect, collaborate, and grow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative">
            <img src="./assets/img2.png" className="h-[50vh] " alt="" />

            <div className="flex gap-16">
              <div>
                <div>
                  <h1 className="font-oswo font-medium text-2xl">
                    Priority Acess
                  </h1>
                </div>

                <div>
                  <p className="font-serif text-xs">
                    Be among the first to experience our exciting platform and
                    gain access to exclusive content, events, and opportunities
                    before anyone else!
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h1 className="font-oswo font-medium text-2xl">
                    Early Bird Invite
                  </h1>
                </div>

                <div>
                  <p className="font-serif text-xs">
                    Receive early invitations to events, workshops,
                    masterclasses, and networking opportunities, providing you
                    with unique chances to connect, collaborate, and grow
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
