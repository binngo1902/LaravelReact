import React from 'react';
import { lengthOptions } from '../../constant/pagination';

export default function PaginationLength(props) {
    return (
        <div className="length row">
            <label>
                表示
                <select value={props.selectedValue || 10} onChange={props.handlePaginationLength} className="custom-select custom-select-sm form-control form-control-sm">
                    {lengthOptions && lengthOptions.map((option) => (
                        <option key={"option_length_" + option} value={option}>{option}</option>
                    ))}
                </select>
                件
            </label>
        </div>
    );

}
