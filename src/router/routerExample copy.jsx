const routes = [
  {
    path: "/:lang",
    element: <App />,
    id: "root",
    children: [
      {
        path: "/:lang/add-card",
        id: "add-card",
        element: <AddCard />,
      },
      {
        path: "/:lang/rent",
        id: "rent",
        element: <Rent />,
      },
      {
        path: "/:lang/doc",
        id: "doc",
        element: <Documentation />,
      },
      {
        path: "/:lang/faq",
        id: "faq",
        element: <Faq />,
      },
      {
        path: "/:lang/privacypolicy",
        id: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/:lang/term&conditions",
        id: "term&conditions",
        element: <Termconditions />,
      },
      {
        path: "/:lang/filter",
        id: "filter",
        element: <Filter />,
      },
      {
        path: "/:lang/history",
        id: "history",
        element: <History />,
      },
      {
        path: "/:lang/my-cards",
        id: "my-cards",
        element: <MyCards />,
      },
      {
        path: "/:lang/order",
        id: "order",
        element: <Order />,
      },
      {
        path: "/:lang/otp",
        id: "otp",
        element: <CardOtp />,
      },
      {
        path: "/:lang/payment",
        id: "payment",
        element: <Payment />,
      },
      {
        path: "/:lang/pricing_description",
        id: "pricing_description",
        element: <Tarif />,
      },
      {
        path: "/:lang/contact_us",
        id: "contact_us",
        element: <ContactUs />
      },
      {
        path: "/:lang/requisites",
        id: "requisites",
        element: <Requisites />,
      },
      {
        path: "/:lang/bonuses",
        id: "bonuses",
        element: <Bonuses />
      },
      {
        path: "/:lang/profile",
        id: "profile",
        element: <Profile />,
        children: [
          {
            path: "/:lang/profile/add-data",
            id: "add-data",
            element: <AddData />,
          },
        ],
      }
    ],
  },
  {
    path: '/',
    element: <App/>
  }
];

export default routes;