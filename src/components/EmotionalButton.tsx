
import { useState } from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import HeartAnimation from './HeartAnimation';
import { Link } from 'react-router-dom';

type EmotionalButtonProps = Omit<ButtonProps, "href"> & {
  emotionType?: 'heart' | 'star';
  numEmotions?: number;
  href?: string;
};

const EmotionalButton = ({
  children,
  emotionType = 'heart',
  numEmotions = 3,
  href,
  ...props
}: EmotionalButtonProps) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const newHearts = Array.from({ length: numEmotions }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 40 - 20 + buttonRect.width / 2,
      y: -10,
      delay: i * 100,
    }));

    setHearts((hearts) => [...hearts, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => !newHearts.find((h) => h.id === heart.id)));
    }, 2500);

    if (props.onClick) {
      props.onClick(e);
    }
  };

  // If href is present, use Link wrapping Button. Otherwise, just Button.
  return (
    <div className="relative inline-block">
      {href ? (
        <Link to={href}>
          {/* Don't pass "type" prop to link-wrapped Button */}
          <Button {...{ ...props, type: undefined }} onClick={handleClick}>
            {children}
          </Button>
        </Link>
      ) : (
        <Button {...props} onClick={handleClick}>
          {children}
        </Button>
      )}

      {hearts.map((heart) => (
        <HeartAnimation
          key={heart.id}
          x={heart.x}
          y={heart.y}
          delay={heart.delay}
        />
      ))}
    </div>
  );
};

export default EmotionalButton;

