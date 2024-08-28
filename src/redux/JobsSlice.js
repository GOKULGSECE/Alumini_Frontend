import { createSlice } from '@reduxjs/toolkit';
import { JOBS } from '../jobsData';

const initialState = {
  jobs: JOBS,
  filteredJobs: JOBS,
  filters: {
    workingSchedule: [],
    employmentType: [],
    level: []
  }
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterName, value, checked } = action.payload;
      const updatedFilters = { ...state.filters };

      if (checked) {
        updatedFilters[filterName].push(value);
      } else {
        updatedFilters[filterName] = updatedFilters[filterName].filter(item => item !== value);
      }

      state.filters = updatedFilters;
      state.filteredJobs = state.jobs.filter(job => 
        (!updatedFilters.workingSchedule.length || updatedFilters.workingSchedule.includes(job.tags[0])) &&
        (!updatedFilters.employmentType.length || updatedFilters.employmentType.some(type => job.tags.includes(type))) &&
        (!updatedFilters.level.length || updatedFilters.level.includes(job.level))
      );
    }
  }
});

export const { setFilter } = jobsSlice.actions;
export default jobsSlice.reducer;
