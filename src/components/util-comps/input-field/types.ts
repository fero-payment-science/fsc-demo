export interface InputFieldProps {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validityCheck?: (value: string) => boolean;
}

