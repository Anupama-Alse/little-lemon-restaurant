import { render, screen,waitFor,fireEvent } from '@testing-library/react';
import App, { initializeTimes,updateTimes } from './App';
import BookingForm from './BookingForm';



test('Renders the booking form heading',()=>{
  const state = jest.fn();
    const validation = jest.fn();
  render(<BookingForm availableTimes={state.availableTimes} validation={validation} />);
  const heading=screen.getByText('Choose date');
  expect(heading).toBeInTheDocument();
});

test('Validate behaviour of initializeTimes',()=>{
  expect(initializeTimes.availableTimes).toBeDefined();
});

test('Validate behvaiour of updateTimes',()=>{
 let action={
  type:'date'
 }
 expect(updateTimes(initializeTimes,action)).toBeDefined();
});

describe('Validate html inputs ',()=>{
  const handleSubmit=jest.fn();
  const validation=jest.fn();
 test('date',()=>{
  render(<BookingForm onSubmit={handleSubmit} validation={validation}/>);
  const dateInput=screen.getByLabelText(/date/);
  const today=new Date();
  fireEvent.change(dateInput,{target:{value:today}})
  waitFor(()=>expect(dateInput.value).toBe(today));
  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute('disabled');
 })
 test('time',()=>{
  render(<BookingForm onSubmit={handleSubmit} validation={validation}/>);
  const time=screen.getByLabelText(/time/);
  fireEvent.change(time,{target:{value:initializeTimes.availableTimes[0]}})
  waitFor(()=>expect(time.value).toBe(initializeTimes.availableTimes[0]));
  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute('disabled');
 })
 test('guests',()=>{
  render(<BookingForm onSubmit={handleSubmit} validation={validation}/>);
  const guests=screen.getByLabelText(/guests/);
  fireEvent.change(guests,{target:{value:2}})
  waitFor(()=>expect(guests.value).toBe(2));
  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute('disabled');
 })

 test('occasion',()=>{
  render(<BookingForm onSubmit={handleSubmit} validation={validation}/>);
  const occasion=screen.getByLabelText(/Occasion/);
  fireEvent.change(occasion,{target:{value:"Birthday"}});
  waitFor(()=>expect(occasion.value).toBe("Birthday"))
  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
 })
})

describe("Render Javascript validation fomrs",()=>{
  const handleSubmit=jest.fn();
  const validation=jest.fn();
  test("Enable buttons",()=>{
    render(<BookingForm onSubmit={handleSubmit} validation={validation}/>);
    const dateInput=screen.getByLabelText(/date/);
  const today=new Date();
  fireEvent.change(dateInput,{target:{value:today}})
  waitFor(()=>expect(dateInput.value).toBe(today));

  const time=screen.getByLabelText(/time/);
  fireEvent.change(time,{target:{value:initializeTimes.availableTimes[0]}})
  waitFor(()=>expect(time.value).toBe(initializeTimes.availableTimes[0]));

  const guests=screen.getByLabelText(/guests/);
  fireEvent.change(guests,{target:{value:2}})
  waitFor(()=>expect(guests.value).toBe(2));

  const occasion=screen.getByLabelText(/Occasion/);
  fireEvent.change(occasion,{target:{value:"Birthday"}});
  waitFor(()=>expect(occasion.value).toBe("Birthday"))

  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton);
  waitFor(()=>expect(handleSubmit).toHaveBeenCalled());
  waitFor(()=>expect(submitButton).not.toHaveAttribute("disabled"));
  })
})