import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function Whatapp() {
  return (
    <div className="relative ">
      <div class="absolute h-14 w-14 -left-4 -top-4 ...">
        <WhatsAppWidget
          phoneNo="919884639400"
          position="left"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={true}
          autoOpenTimer={5000}
          messageBox={true}
          // messageBoxTxt="Hi Team, is there any related service available ?"
          iconSize="60"
          iconColor="white"
          iconBgColor="#25D366"
          headerIcon="https://athulyahomecare.com/lp/images/care.png"
          headerIconColor="pink"
          headerTxtColor="White"
          headerBgColor="#095E53"
          headerTitle="Athulya Homecare"
          headerCaption="Online"
          bodyBgColor=""
          chatPersonName="Support"
          chatMessage={
            <>
              Hi there 👋 <br />
              <br /> How can I help you?
            </>
          }
          footerBgColor=""
          btnBgColor="#14C656"
          btnTxtColor="white"
          btnTxt={
            <>
              <ion-icon name="send-sharp"></ion-icon>
              Start Chat
            </>
          }
        />
      </div>
    </div>
  );
}

export default Whatapp;
