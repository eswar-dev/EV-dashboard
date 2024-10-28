// src/App.tsx
import React from 'react';
import {  Suspense,lazy } from 'react';

import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  const Dashboard = lazy(() => import('./modules/dashboard'));
  return (
    <Router>
    <Routes>
        
          <Route element={<MainLayout  />}>
          <Route
              element={
                <Navigate
                  to={ '/dashboard'}
                  replace
                />
              }
              path='/'
            ></Route>
            <Route
              element={
                <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
              }
              path='/dashboard'
            />
            
         
        </Route>
    

    </Routes>
  </Router>
  );
};

export default App;

     {/* <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Telematics />
                  </Suspense>
                }
                path='telematics'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Fleet />
                  </Suspense>
                }
                path='fleet'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Organization />
                </Suspense>
              }
              path='/organizations'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <CompanyList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <CompanyList />
                  </Suspense>
                }
                path='companies'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <SiteList />
                  </Suspense>
                }
                path='sites'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <SiteAreaList />
                  </Suspense>
                }
                path='site-areas'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Car />
                </Suspense>
              }
              path='/cars'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    {isSuperAdmin() === true ? (
                      <ElectricVehicles />
                    ) : (
                      <Catalog />
                    )}
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ElectricVehicles />
                  </Suspense>
                }
                path='electric-vehicles'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Catalog />
                  </Suspense>
                }
                path='catalogs'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <User />
                </Suspense>
              }
              path='/users'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserList />
                  </Suspense>
                }
                path='user-lists'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserInError />
                  </Suspense>
                }
                path='user-in-error'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Logs />
                </Suspense>
              }
              path='logs'
            ></Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <RfidCard />
                </Suspense>
              }
              path='tags'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <RFIDCardList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <RFIDCardList />
                  </Suspense>
                }
                path='tags-list'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ExpiringSoonList />
                  </Suspense>
                }
                path='expiring-tags-list'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Sessions />
                </Suspense>
              }
              path='transactions'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionsInProgress />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionsInProgress />
                  </Suspense>
                }
                path='/transactions/in-progress'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsHistory />
                  </Suspense>
                }
                path='/transactions/history'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsInError />
                  </Suspense>
                }
                path='/transactions/in-error'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Gridify />
                </Suspense>
              }
              path='gridify'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <DemandInHistory />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <GridifyInProgress />
                  </Suspense>
                }
                path='/gridify/in-progress'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <DemandInHistory />
                  </Suspense>
                }
                path='/gridify/demand-view'
              ></Route>
               <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <PowerManagement />
                  </Suspense>
                }
                path='/gridify/power-management'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargerConfiguration />
                  </Suspense>
                }
                path='/gridify/charger-configuration'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsHistory />
                  </Suspense>
                }
                path='/gridify/history'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsInError />
                  </Suspense>
                }
                path='/gridify/in-error'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Invoice />
                </Suspense>
              }
              path='invoices'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionList />
                  </Suspense>
                }
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <InvoiceList />
                  </Suspense>
                }
                path='/invoices/invoice-lists'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransferList />
                  </Suspense>
                }
                path='/invoices/transfers'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsRefund />
                  </Suspense>
                }
                path='/invoices/refund'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionList />
                  </Suspense>
                }
                path='/invoices/in-transactions'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Profile />
                </Suspense>
              }
              path='/profile'
            ></Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Tenant />
                </Suspense>
              }
              path='tenants'
            ></Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <ChargingStation />
                </Suspense>
              }
              path='/charging-stations'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <NewChargingStationList />
                  </Suspense>
                }
                path='new-charging-stations-list'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationList />
                  </Suspense>
                }
                path='charging-stations-list'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingPlan />
                  </Suspense>
                }
                path='charging-plans'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationInError />
                  </Suspense>
                }
                path='charging-in-error'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <OnBoardNewStation />
                  </Suspense>
                }
                path='onboard-new-station'
              ></Route>
            </Route>

            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Assets />
                </Suspense>
              }
              path='/assets'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <AssetInAsset />
                  </Suspense>
                }
              ></Route>

              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <AssetInError />
                  </Suspense>
                }
                path='assets-in-error'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <EnergyStorage />
                </Suspense>
              }
              path='/energy-storage'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <EnergyStoragesList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationList />
                  </Suspense>
                }
                path='charging-stations-list'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingPlan />
                  </Suspense>
                }
                path='charging-plans'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationInError />
                  </Suspense>
                }
                path='charging-in-error'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <OnBoardNewStation />
                  </Suspense>
                }
                path='onboard-new-station'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Car />
                </Suspense>
              }
              path='/cars'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Catalog />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Catalog />
                  </Suspense>
                }
                path='catalogs'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <User />
                </Suspense>
              }
              path='/users'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserList />
                  </Suspense>
                }
                path='user-lists'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserInError />
                  </Suspense>
                }
                path='user-in-error'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Logs />
                </Suspense>
              }
              path='logs'
            ></Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <RfidCard />
                </Suspense>
              }
              path='tags'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <RFIDCardList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <RFIDCardList />
                  </Suspense>
                }
                path='tags-list'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Sessions />
                </Suspense>
              }
              path='transactions'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionsInProgress />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionsInProgress />
                  </Suspense>
                }
                path='/transactions/in-progress'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsHistory />
                  </Suspense>
                }
                path='/transactions/history'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsInError />
                  </Suspense>
                }
                path='/transactions/in-error'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Invoice />
                </Suspense>
              }
              path='invoices'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <InvoiceList />
                  </Suspense>
                }
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <InvoiceList />
                  </Suspense>
                }
                path='/invoices/invoice-lists'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransferList />
                  </Suspense>
                }
                path='/invoices/transfers'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TransactionList />
                  </Suspense>
                }
                path='/invoices/in-transactions'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TrasactionsRefund />
                  </Suspense>
                }
                path='/invoices/refund'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Profile />
                </Suspense>
              }
              path='/profile'
            ></Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Tenant />
                </Suspense>
              }
              path='tenants'
            ></Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <ChargingStation />
                </Suspense>
              }
              path='/charging-stations'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationList />
                  </Suspense>
                }
                path='charging-stations-list'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingPlan />
                  </Suspense>
                }
                path='charging-plans'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationInError />
                  </Suspense>
                }
                path='charging-in-error'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <OnBoardNewStation />
                  </Suspense>
                }
                path='onboard-new-station'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <Statistics />
                </Suspense>
              }
              path='statistics'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Consumption />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Consumption />
                  </Suspense>
                }
                path='consumption'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Usage />
                  </Suspense>
                }
                path='usage'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Inactivity />
                  </Suspense>
                }
                path='inactivity'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <StatisticSessions />
                  </Suspense>
                }
                path='transactions'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <StatisticPricing />
                  </Suspense>
                }
                path='pricing'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <IntegrationSetting />
                </Suspense>
              }
              path='integration-settings'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <IntegrationRoaming />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <IntegrationRoaming />
                  </Suspense>
                }
                path='roaming'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <RoamingHubject />
                  </Suspense>
                }
                path='roaming-hubject'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Refunding />
                  </Suspense>
                }
                path='refunding'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Pricing />
                  </Suspense>
                }
                path='pricing'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Billing />
                  </Suspense>
                }
                path='billing'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Analytics />
                  </Suspense>
                }
                path='analytics'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <SmartCharging />
                  </Suspense>
                }
                path='smartCharging'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <Asset />
                  </Suspense>
                }
                path='asset'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <CarConnector />
                  </Suspense>
                }
                path='carConnector'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <TechnicalSetting />
                </Suspense>
              }
              path='technical-settings'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <TechnicalOrganization />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <CryptoSetting />
                  </Suspense>
                }
                path='crypto-settings'
              ></Route>
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <UserSetting />
                  </Suspense>
                }
                path='user-settings'
              ></Route>
            </Route>
            <Route
              element={
                <Suspense fallback={<Loader showLoader={true} />}>
                  <ChargingStationTemplate />
                </Suspense>
              }
              path='/charging-station-templates'
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationTemplateList />
                  </Suspense>
                }
              />
              <Route
                element={
                  <Suspense fallback={<Loader showLoader={true} />}>
                    <ChargingStationTemplateList />
                  </Suspense>
                }
                path='/charging-station-templates-list'
              ></Route>
            </Route> */}
