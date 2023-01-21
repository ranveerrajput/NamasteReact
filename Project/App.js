import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="logo"
    />
  </a>
);

const restrauntList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "576382",
        name: "La Pino'z Pizza",
        uuid: "8369f69f-d5d3-4d3d-a6da-cd15c927f197",
        city: "6",
        area: "Hinjewadi",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "qhfw858zccsx8kph6tch",
        cuisines: ["Desserts", "Beverages", "Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        slaString: "21 MINS",
        lastMileTravel: 0.8999999761581421,
        slugs: {
          restaurant: "la-pino'z-pizza-hinjewadi-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "Showroom No.: 3, Suratwala Mark Plazzo, Hinjewadi Phase 1, Pune (Maharastra)",
        locality: "1st Phase",
        parentId: 4961,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹80",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "576382",
          deliveryTime: 21,
          minDeliveryTime: 21,
          maxDeliveryTime: 21,
          lastMileTravel: 0.8999999761581421,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.4",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "57347",
        name: "Reddy's Biryani Zone",
        uuid: "2e980e82-68df-4b17-8df4-11fa33ce6977",
        city: "6",
        area: "Hinjawadi",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "ytwo1n5zaa7nplsnsryl",
        cuisines: ["Biryani", "Mughlai", "North Indian"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        slaString: "18 MINS",
        lastMileTravel: 0.8999999761581421,
        slugs: {
          restaurant: "reddys-biryani-zone-hinjewadi-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "Phase 1, Opposite Kpit, Near Hinjewadi Hospital, Marunji Road, Hinjawadi, Pune",
        locality: "Hinjewadi",
        parentId: 11490,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "₹75 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "57347",
          deliveryTime: 18,
          minDeliveryTime: 18,
          maxDeliveryTime: 18,
          lastMileTravel: 0.8999999761581421,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "41800",
        name: "Faasos - Wraps & Rolls",
        uuid: "670e3850-1d57-4382-a110-f07bb7021b28",
        city: "6",
        area: "Hinjawadi",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "zyugmhwykpmlu7ztdjis",
        cuisines: ["Fast Food", "North Indian", "Street Food", "Desserts"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 2,
        slugs: {
          restaurant: "faasos-rajiv-gandhi-infotech-park-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "Central Co-Op Bank, 220, Hinjewadi Maan Road, Phase 1, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra - 411057",
        locality: "Maan Road Om plaza 2nd floor",
        parentId: 21809,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5771844~p=7~eid=00000185-d476-0484-0c9f-2d26000e074e",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹80",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "41800",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 2,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "3405",
        name: "Rolls Mania",
        uuid: "b194c29e-ca4a-49ba-ac69-d8a5beccb27e",
        city: "6",
        area: "Hinjewadi",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "vsgw4z2dn2gmbsdgekyw",
        cuisines: ["North Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "rolls-mania-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "Shop 3, Mhatoba Complex, Opposite KPIT Cummins, Shivtej Chowk,Hinjewadi, Pune",
        locality: "Hinjewadi",
        parentId: 171118,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹80",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "3405",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "381403",
        name: "Mad Over Donuts",
        uuid: "a10bcb60-58bc-4995-ac35-17fcdd99f8fc",
        city: "6",
        area: "Hinjewadi",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "2553d78e7d2b3e9f80f367c244e880f3",
        cuisines: ["Desserts", "Sweets", "Bakery"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        slaString: "17 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "mad-over-donuts-bhatewara-nagar-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "1st floor, s no 275/1 and 275/3, Time square Building, Bhatewara nagar, Dange chowk road, phase 1, hinjewadi, pune, pin 411057",
        locality: "Bhatewara nagar",
        parentId: 611,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "381403",
          deliveryTime: 17,
          minDeliveryTime: 17,
          maxDeliveryTime: 17,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "60140",
        name: "KGN Xprs",
        uuid: "77cc6461-cdaa-4811-8d99-b8c972b52157",
        city: "6",
        area: "Wakad",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "budged7wtkz0oa0fh4f3",
        cuisines: ["Tandoor", "Biryani", "North Indian", "Chinese"],
        tags: [],
        costForTwo: 60000,
        costForTwoString: "₹600 FOR TWO",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: "29 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "kgn-xprs-wakad-wakad",
          city: "pune",
        },
        cityState: "6",
        address:
          "shop no 1,manli chowk,dattamandir road,Wakad,Pune  near   chirryush hospital   ",
        locality: "Pimple Saudagar",
        parentId: 10145,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5756793~p=10~eid=00000185-d476-0484-0c9f-2d27000e0a02",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹80",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "60140",
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.9",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restrauntList.map((restaurant) => {
        return (
          <Reataurant restaurant={restaurant} key={restaurant.data.data.id} />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const Reataurant = (props) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.restaurant.data?.data?.cloudinaryImageId
        }
        alt=""
      />
      <h2>{props.restaurant.data?.data?.name}</h2>
      <h3>{props.restaurant?.data?.data?.cuisines.join(",")}</h3>
      <h4>{props.restaurant.data?.data?.lastMileTravelString}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const heading = React.createElement("h1", {}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
