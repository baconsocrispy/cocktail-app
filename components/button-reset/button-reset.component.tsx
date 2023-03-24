// library imports
import { useContext } from "react";

// context
import { FilteringContext } from "@/contexts/filtering.context";

const ResetButton = () => {
  // state
  const { resetFilterOptions } = useContext(FilteringContext)

  // handlers
  const handleResetClick = () => resetFilterOptions();

  return (
    <div className="filterbar__option--reset">
      <button className="reset" onClick={ handleResetClick }>
        Reset
      </button>
    </div>
  )
}

export default ResetButton