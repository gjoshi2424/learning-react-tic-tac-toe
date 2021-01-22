import Board from './Board';
import { render, fireEvent } from '@testing-library/react';


test('should show X and O on alternating clicks', () => {
    const board = render(<Board />);
    const buttons = board.queryAllByRole('button')
    fireEvent.click(buttons[0]);
    expect(buttons[0].innerHTML).toBe('X');   
    fireEvent.click(buttons[1]);
    expect(buttons[1].innerHTML).toBe('O');
    fireEvent.click(buttons[2]);
    expect(buttons[2].innerHTML).toBe('X');
    fireEvent.click(buttons[3]);
    expect(buttons[3].innerHTML).toBe('O');
});

test('should show X and O on alternating clicks', () => {
    const board = render(<Board />);
    const turn = board.getByText(/Next player:/);
    const buttons = board.queryAllByRole('button')
    expect(turn.innerHTML).toBe('Next player: X');   
    fireEvent.click(buttons[0]);
    expect(turn.innerHTML).toBe('Next player: O');
    fireEvent.click(buttons[1]);
    expect(turn.innerHTML).toBe('Next player: X');
    fireEvent.click(buttons[2]);
    expect(turn.innerHTML).toBe('Next player: O');
    fireEvent.click(buttons[3]);
    expect(turn.innerHTML).toBe('Next player: X');
    fireEvent.click(buttons[4]);
    expect(turn.innerHTML).toBe('Next player: O');
    fireEvent.click(buttons[5]);
    expect(turn.innerHTML).toBe('Next player: X');
});





    