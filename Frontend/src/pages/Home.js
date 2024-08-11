import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function Myhandler() {
    navigate("/home/ExpenseTracker");
  }
  function Myhandler2() {
    navigate("/home/Rent");
  }
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <section className="section services-section py-12" id="services">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-6 w-full lg:w-1/2">
              <div className="section-title mb-8">
                <h2 className="text-3xl font-semibold">AgriRentpro</h2>
                <p className="text-gray-600 mt-4">
                  Rental and Cost Estimation Services
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-5">
            <div
              onClick={Myhandler}
              className="col-sm-6 col-lg-4 w-full sm:w-1/2 lg:w-1/3 mb-8"
            >
              <div className="feature-box-1 bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="icon text-3xl mb-4">
                  <i className="fa fa-desktop text-indigo-600"></i>
                </div>
                <div className="feature-content">
                  <h5 className="text-xl font-semibold mb-2">
                    Cost Estimation
                  </h5>
                  <p className="text-gray-600">
                    To predict the final cost, profit, sales along with
                    component costing
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={Myhandler2}
              className="col-sm-6 col-lg-4 w-full sm:w-1/2 lg:w-1/3 mb-8"
            >
              <div className="feature-box-1 bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="icon text-3xl mb-4">
                  <i className="fa fa-desktop text-indigo-600"></i>
                </div>
                <div className="feature-content">
                  <h5 className="text-xl font-semibold mb-2">
                  Rental
                  </h5>
                  <p className="text-gray-600">
                  To Lend or Borrow equipment or access essential machinery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
