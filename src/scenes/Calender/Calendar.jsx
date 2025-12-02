import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core';
import './calender.css'

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Header from '../../component/Header';
import { tokens } from '../../Theme';

const Calendar2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  // Check if the screen size is small

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${Date.now()}-${title}`,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Delete event: '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  return (
    <Box m="5px" transition="margin-left 0.3s ease">
      <Header title="CALENDAR" subtitle="Full Interactive Calendar" />

      <Box display="flex" flexDirection={{ xs: 'column', MediumScreen: 'column', lg: 'row' }} gap={3}>
        {/* EVENTS SIDEBAR */}
        <Box
          flex={{ xs: '0 0 auto', MediumScreen: '0 0 auto', lg: '0 1 220px' }}
          width={{ xs: '100%', MediumScreen: '100%', lg: '220px' }}
          bgcolor={colors.primary[400]}
          borderRadius="12px"
          p={3}
          sx={{ boxShadow: 3 }}
          flexWrap="wrap"
        >
          <Typography variant="h5" fontWeight="600" color={colors.gray[100]} mb={2}>
            Events ({currentEvents.length})
          </Typography>

          {currentEvents.length === 0 ? (
            <Typography color={colors.gray[400]} fontStyle="italic">
              No events yet. Tap a date to add one!
            </Typography>
          ) : (
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    bgcolor: colors.greenAccent[500],
                    color: 'white',
                    borderRadius: '8px',
                    mb: 1.5,
                    p: 1.5,
                    '&:hover': { bgcolor: colors.greenAccent[600] },
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={formatDate(event.start, { month: 'short', day: 'numeric' })}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {/* MAIN CALENDAR */}
        <Box flex="1" bgcolor={colors.primary[400]} borderRadius="12px" p={2} sx={{ boxShadow: 3 }}>
          <FullCalendar
            height="75vh"   // Fixed height instead of "100%" works on all screens
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth timeGridWeek timeGridDay listMonth',  // Default horizontal layout
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: '1', title: "Akram's Birthday 🎉", date: '2025-11-19' },
              { id: '2', title: "Team Meeting", date: '2025-11-25' },
            ]}
            eventBackgroundColor={colors.greenAccent[500]}
            eventTextColor="white"
            className="calendar-header" // Add a class to target the header
          />
        </Box>
      </Box>

      {/* Custom CSS to force column layout for small screens */}
      <style jsx>{`
        @media (max-width: 600px) {
          .calendar-header .fc-toolbar-chunk {
            display: flex;
            flex-direction: column !important; // Force column direction on small screens
            align-items: flex-start;
          }
        }
      `}</style>
    </Box>
  );
};

export default Calendar2;
