// FilterSidebar.jsx
import React from 'react';
import { setFilter} from '../redux/JobsSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css'

const FilterSidebar = () => {

    const dispatch = useDispatch();

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        dispatch(setFilter({ filterName: name, value, checked }));
    };

  return (
   <>
   <div className="filter-sidebar">
            <h3>Filters</h3>

            {/* Working Schedule */}
            <div className="filter-group">
                <label>Working Schedule</label>
                <div>
                    <input
                        type="checkbox"
                        name="workingSchedule"
                        value="Full-time"
                        onChange={handleCheckboxChange}
                    />
                    <label>Full-time</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="workingSchedule"
                        value="Part-time"
                        onChange={handleCheckboxChange}
                    />
                    <label>Part-time</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="workingSchedule"
                        value="Internship"
                        onChange={handleCheckboxChange}
                    />
                    <label>Internship</label>
                </div>
            </div>

            {/* Employment Type */}
            <div className="filter-group">
                <label>Employment Type</label>
                <div>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="Onsite"
                        onChange={handleCheckboxChange}
                    />
                    <label>Onsite</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="Flexible schedule"
                        onChange={handleCheckboxChange}
                    />
                    <label>Flexible schedule</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="Shift work"
                        onChange={handleCheckboxChange}
                    />
                    <label>Shift work</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="employmentType"
                        value="Remote work"
                        onChange={handleCheckboxChange}
                    />
                    <label>Remote work</label>
                </div>
            </div>

            {/* Level */}
            <div className="filter-group">
                <label>Level</label>
                <div>
                    <input
                        type="checkbox"
                        name="level"
                        value="Fresher"
                        onChange={handleCheckboxChange}
                    />
                    <label>Fresher level</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="level"
                        value="Mid"
                        onChange={handleCheckboxChange}
                    />
                    <label>Mid level</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="level"
                        value="Senior"
                        onChange={handleCheckboxChange}
                    />
                    <label>Senior level</label>
                </div>
            </div>
        </div>
   </>
  );
};

export default FilterSidebar;
