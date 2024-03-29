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
    <div className="reset">
      <button className="reset__button util-default-button" onClick={ handleResetClick }>
        Reset
      </button>
    </div>
  )
}

export default ResetButton