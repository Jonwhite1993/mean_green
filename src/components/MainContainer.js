import FinanceView from "./FinanceView"

const MainContainer = () => {
  return(
    <div className="main-container">
      Main Container
      <FinanceView />
      <div className="finance-input-container">
        <input type="text" />
        <button>Add</button>
      </div>
    </div>
  )
}

export default MainContainer