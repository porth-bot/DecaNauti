import React, { useState, useEffect } from 'react';

// Nautical Bowls CSR App - Branded Version
// Brand Colors from nauticalbowls.com
const BRAND = {
  teal: '#1B9AAA',
  tealDark: '#147F8A', 
  tealLight: '#E8F6F7',
  navy: '#1A3A4A',
  white: '#FFFFFF',
  gray: '#6B7280',
  grayLight: '#F3F4F6',
  coral: '#E85D4C',
  gold: '#D4A853'
};

const NauticalBowlsApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState({
    name: 'Paul',
    nautiPoints: 134,
    personalContribution: 120,
    bowlsPurchased: 27,
    mealsGiven: 27,
    eventsAttended: 3,
    co2Saved: 12.4,
    plasticReduced: 2.1
  });
  const [selectedCause, setSelectedCause] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1200);
  }, []);

  const franchiseGoal = { current: 6700, target: 10000, location: 'Plymouth', daysLeft: 14 };
  
  const causes = [
    { id: 1, name: 'Pride of the Prairie', description: 'Supporting local Minnesota farms', votes: 234 },
    { id: 2, name: 'Urban Growth', description: 'Community gardens in Twin Cities', votes: 189 },
    { id: 3, name: 'Feed My Starving Children', description: 'Meals for children in need', votes: 312 },
    { id: 4, name: 'Team Seas', description: 'Ocean cleanup initiative', votes: 267 },
    { id: 5, name: 'Local Schools Fund', description: 'Education resources for MN schools', votes: 156 },
    { id: 6, name: 'Clean Air Minnesota', description: 'Environmental protection efforts', votes: 198 }
  ];

  const rewards = [
    { id: 1, name: '$2 Off Any Bowl', points: 50, available: true },
    { id: 2, name: 'Free Smoothie Add-On', points: 75, available: true },
    { id: 3, name: 'Nautical Sticker Pack', points: 100, available: true },
    { id: 4, name: 'Free Signature Bowl', points: 200, available: true },
    { id: 5, name: 'Reusable Nautical Bowl', points: 300, available: false },
    { id: 6, name: 'VIP Event Access', points: 500, available: false }
  ];

  const recentActivity = [
    { type: 'purchase', desc: 'Nauti Bowl', points: 5, time: '2 hours ago' },
    { type: 'donation', desc: 'Donated $10 to Team Seas', points: 10, time: 'Yesterday' },
    { type: 'event', desc: 'Beach Cleanup Event', points: 25, time: '3 days ago' },
    { type: 'purchase', desc: 'Paddle Bowl', points: 5, time: '5 days ago' }
  ];

  const handleVote = (causeId) => setSelectedCause(causeId);

  const submitVote = () => {
    if (selectedCause) {
      setHasVoted(true);
      setUser(prev => ({ ...prev, nautiPoints: prev.nautiPoints + 5 }));
    }
  };

  const redeemReward = (reward) => {
    if (user.nautiPoints >= reward.points && reward.available) {
      setSelectedReward(reward);
      setShowRewardModal(true);
    }
  };

  const confirmRedeem = () => {
    setUser(prev => ({ ...prev, nautiPoints: prev.nautiPoints - selectedReward.points }));
    setShowRewardModal(false);
    setSelectedReward(null);
  };

  // Styles
  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: BRAND.grayLight,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    container: {
      maxWidth: '420px',
      margin: '0 auto',
      backgroundColor: BRAND.white,
      minHeight: '100vh',
      position: 'relative'
    },
    header: {
      backgroundColor: BRAND.white,
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${BRAND.grayLight}`,
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    logo: {
      width: '48px',
      height: '48px',
      borderRadius: '50%'
    },
    logoText: {
      marginLeft: '12px'
    },
    logoTitle: {
      fontSize: '14px',
      fontWeight: '800',
      color: BRAND.navy,
      letterSpacing: '0.5px',
      margin: 0
    },
    logoSubtitle: {
      fontSize: '10px',
      color: BRAND.teal,
      fontWeight: '600',
      margin: 0,
      letterSpacing: '0.3px'
    },
    content: {
      padding: '20px',
      paddingBottom: '100px'
    },
    card: {
      backgroundColor: BRAND.white,
      borderRadius: '20px',
      padding: '24px',
      marginBottom: '16px',
      boxShadow: '0 2px 12px rgba(27, 154, 170, 0.08)',
      border: `1px solid ${BRAND.grayLight}`
    },
    pointsCard: {
      background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealDark} 100%)`,
      borderRadius: '24px',
      padding: '28px',
      marginBottom: '20px',
      color: BRAND.white,
      position: 'relative',
      overflow: 'hidden'
    },
    waveDecor: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '60px',
      opacity: 0.15
    },
    btn: {
      backgroundColor: BRAND.teal,
      color: BRAND.white,
      border: 'none',
      padding: '16px 24px',
      borderRadius: '14px',
      fontWeight: '700',
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.2s'
    },
    btnSecondary: {
      backgroundColor: BRAND.grayLight,
      color: BRAND.navy,
      border: 'none',
      padding: '14px 24px',
      borderRadius: '14px',
      fontWeight: '600',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    navBar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '420px',
      margin: '0 auto',
      backgroundColor: BRAND.white,
      borderTop: `1px solid ${BRAND.grayLight}`,
      display: 'flex',
      justifyContent: 'space-around',
      padding: '8px 0 24px 0',
      zIndex: 100
    },
    navItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8px 16px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      borderRadius: '12px',
      transition: 'all 0.2s'
    },
    progressBar: {
      height: '10px',
      backgroundColor: BRAND.grayLight,
      borderRadius: '5px',
      overflow: 'hidden',
      marginTop: '12px'
    },
    progressFill: {
      height: '100%',
      background: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.tealDark})`,
      borderRadius: '5px',
      transition: 'width 1s ease-out'
    },
    statBox: {
      backgroundColor: BRAND.tealLight,
      borderRadius: '16px',
      padding: '20px',
      textAlign: 'center',
      border: `1px solid rgba(27, 154, 170, 0.2)`
    },
    modal: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 200,
      padding: '20px'
    },
    modalContent: {
      backgroundColor: BRAND.white,
      borderRadius: '24px',
      padding: '32px',
      maxWidth: '340px',
      width: '100%',
      textAlign: 'center'
    }
  };

  // Wave SVG Component
  const WaveSVG = () => (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="white" />
    </svg>
  );

  // Loading Screen
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: BRAND.teal,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src="https://nauticalbowls.com/wp-content/uploads/2024/07/favicon.png"
          alt="Nautical Bowls"
          style={{ width: '80px', height: '80px', marginBottom: '24px' }}
        />
        <p style={{ color: BRAND.white, fontSize: '12px', letterSpacing: '3px', fontWeight: '600' }}>
          FUEL A FULL LIFE
        </p>
      </div>
    );
  }

  // Home Tab
  const HomeTab = () => (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: BRAND.gray, fontSize: '14px', margin: 0 }}>Good afternoon</p>
        <h1 style={{ color: BRAND.navy, fontSize: '26px', fontWeight: '700', margin: '4px 0 0 0' }}>
          Welcome back, {user.name}
        </h1>
      </div>

      {/* Points Card */}
      <div style={styles.pointsCard}>
        <div style={styles.waveDecor}><WaveSVG /></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ opacity: 0.8, fontSize: '13px', margin: 0, fontWeight: '500' }}>Your Nauti Points</p>
          <p style={{ fontSize: '52px', fontWeight: '800', margin: '8px 0', letterSpacing: '-2px' }}>
            {user.nautiPoints}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div>
              <p style={{ opacity: 0.7, fontSize: '12px', margin: 0 }}>Meals Given</p>
              <p style={{ fontSize: '24px', fontWeight: '700', margin: '4px 0 0 0' }}>{user.mealsGiven}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ opacity: 0.7, fontSize: '12px', margin: 0 }}>Contributed</p>
              <p style={{ fontSize: '24px', fontWeight: '700', margin: '4px 0 0 0' }}>${user.personalContribution}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Franchise Goal */}
      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ color: BRAND.navy, fontSize: '17px', fontWeight: '700', margin: 0 }}>
              {franchiseGoal.location} Monthly Goal
            </h3>
            <p style={{ color: BRAND.gray, fontSize: '13px', margin: '4px 0 0 0' }}>
              {franchiseGoal.daysLeft} days remaining
            </p>
          </div>
          <span style={{
            backgroundColor: BRAND.tealLight,
            color: BRAND.teal,
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '700'
          }}>
            {Math.round((franchiseGoal.current / franchiseGoal.target) * 100)}%
          </span>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${(franchiseGoal.current / franchiseGoal.target) * 100}%` }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '14px' }}>
          <span style={{ color: BRAND.teal, fontWeight: '700' }}>${franchiseGoal.current.toLocaleString()}</span>
          <span style={{ color: BRAND.gray }}>${franchiseGoal.target.toLocaleString()}</span>
        </div>
        <div style={{
          marginTop: '16px',
          padding: '14px',
          backgroundColor: '#FEF7ED',
          borderRadius: '12px',
          border: '1px solid #FDE7CC'
        }}>
          <p style={{ color: '#92600E', fontSize: '13px', margin: 0 }}>
            <strong>Goal Bonus:</strong> All contributors earn 50 bonus Nauti Points when we hit our target!
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={styles.statBox}>
          <p style={{ fontSize: '28px', fontWeight: '800', color: BRAND.teal, margin: 0 }}>{user.co2Saved}</p>
          <p style={{ fontSize: '13px', color: BRAND.tealDark, margin: '4px 0 0 0', fontWeight: '500' }}>kg CO₂ Saved</p>
        </div>
        <div style={styles.statBox}>
          <p style={{ fontSize: '28px', fontWeight: '800', color: BRAND.teal, margin: 0 }}>{user.plasticReduced}</p>
          <p style={{ fontSize: '13px', color: BRAND.tealDark, margin: '4px 0 0 0', fontWeight: '500' }}>kg Plastic Reduced</p>
        </div>
      </div>

      {/* Vote CTA */}
      {!hasVoted && (
        <div style={{
          background: `linear-gradient(135deg, ${BRAND.coral} 0%, #D94A3A 100%)`,
          borderRadius: '20px',
          padding: '24px',
          color: BRAND.white,
          marginBottom: '16px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Vote for January's Cause</h3>
          <p style={{ fontSize: '14px', opacity: 0.9, margin: '8px 0 16px 0' }}>
            Choose where your impact goes this month
          </p>
          <button
            onClick={() => setActiveTab('vote')}
            style={{
              backgroundColor: BRAND.white,
              color: BRAND.coral,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Vote Now · Earn 5 Points
          </button>
        </div>
      )}

      {/* Recent Activity */}
      <div style={styles.card}>
        <h3 style={{ color: BRAND.navy, fontSize: '17px', fontWeight: '700', margin: '0 0 16px 0' }}>
          Recent Activity
        </h3>
        {recentActivity.map((activity, idx) => (
          <div key={idx} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0',
            borderBottom: idx < recentActivity.length - 1 ? `1px solid ${BRAND.grayLight}` : 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: BRAND.tealLight,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                {activity.type === 'purchase' && '🥣'}
                {activity.type === 'donation' && '💚'}
                {activity.type === 'event' && '🎉'}
              </div>
              <div>
                <p style={{ color: BRAND.navy, fontSize: '14px', fontWeight: '600', margin: 0 }}>{activity.desc}</p>
                <p style={{ color: BRAND.gray, fontSize: '12px', margin: '2px 0 0 0' }}>{activity.time}</p>
              </div>
            </div>
            <span style={{ color: BRAND.teal, fontWeight: '700', fontSize: '14px' }}>+{activity.points}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Rewards Tab
  const RewardsTab = () => (
    <div>
      <h1 style={{ color: BRAND.navy, fontSize: '26px', fontWeight: '700', margin: '0 0 4px 0' }}>Rewards</h1>
      <p style={{ color: BRAND.gray, fontSize: '14px', margin: '0 0 20px 0' }}>Redeem your Nauti Points</p>

      {/* Points Balance */}
      <div style={{ ...styles.pointsCard, textAlign: 'center', marginBottom: '24px' }}>
        <div style={styles.waveDecor}><WaveSVG /></div>
        <p style={{ opacity: 0.8, fontSize: '13px', margin: 0, position: 'relative', zIndex: 1 }}>Available Balance</p>
        <p style={{ fontSize: '56px', fontWeight: '800', margin: '8px 0', position: 'relative', zIndex: 1 }}>{user.nautiPoints}</p>
        <p style={{ opacity: 0.7, fontSize: '13px', margin: 0, position: 'relative', zIndex: 1 }}>Nauti Points</p>
      </div>

      {/* How to Earn */}
      <div style={styles.card}>
        <h3 style={{ color: BRAND.navy, fontSize: '16px', fontWeight: '700', margin: '0 0 16px 0' }}>How to Earn</h3>
        {[
          { action: 'Purchase a bowl', points: 5 },
          { action: 'Donate $1', points: 1 },
          { action: 'Community event', points: 25 },
          { action: 'BYOB Friday', points: 10 },
          { action: 'Vote monthly', points: 5 }
        ].map((item, idx) => (
          <div key={idx} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 14px',
            backgroundColor: BRAND.grayLight,
            borderRadius: '10px',
            marginBottom: '8px'
          }}>
            <span style={{ color: BRAND.navy, fontSize: '14px' }}>{item.action}</span>
            <span style={{ color: BRAND.teal, fontWeight: '700', fontSize: '14px' }}>+{item.points}</span>
          </div>
        ))}
      </div>

      {/* Rewards List */}
      <h3 style={{ color: BRAND.navy, fontSize: '16px', fontWeight: '700', margin: '24px 0 16px 0' }}>Redeem</h3>
      {rewards.map((reward) => {
        const canRedeem = user.nautiPoints >= reward.points && reward.available;
        return (
          <button
            key={reward.id}
            onClick={() => redeemReward(reward)}
            disabled={!canRedeem}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px',
              backgroundColor: canRedeem ? BRAND.white : BRAND.grayLight,
              border: `1px solid ${canRedeem ? BRAND.teal : BRAND.grayLight}`,
              borderRadius: '14px',
              marginBottom: '10px',
              cursor: canRedeem ? 'pointer' : 'not-allowed',
              opacity: canRedeem ? 1 : 0.6,
              transition: 'all 0.2s'
            }}
          >
            <span style={{ color: BRAND.navy, fontSize: '15px', fontWeight: '600' }}>{reward.name}</span>
            <span style={{ color: canRedeem ? BRAND.teal : BRAND.gray, fontWeight: '700', fontSize: '14px' }}>
              {reward.points} pts
            </span>
          </button>
        );
      })}
    </div>
  );

  // Vote Tab
  const VoteTab = () => (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          width: '72px',
          height: '72px',
          backgroundColor: BRAND.tealLight,
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px auto',
          fontSize: '32px'
        }}>
          🗳️
        </div>
        <h1 style={{ color: BRAND.navy, fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>
          January Cause Voting
        </h1>
        <p style={{ color: BRAND.gray, fontSize: '14px', margin: 0 }}>
          Select where your purchases make an impact
        </p>
      </div>

      {hasVoted ? (
        <div style={{
          backgroundColor: BRAND.tealLight,
          borderRadius: '20px',
          padding: '32px',
          textAlign: 'center',
          border: `1px solid ${BRAND.teal}`
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
          <h2 style={{ color: BRAND.teal, fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0' }}>
            Thanks for Voting!
          </h2>
          <p style={{ color: BRAND.tealDark, fontSize: '14px', margin: 0 }}>
            You earned 5 Nauti Points
          </p>
        </div>
      ) : (
        <>
          {causes.map((cause) => (
            <button
              key={cause.id}
              onClick={() => handleVote(cause.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px',
                backgroundColor: selectedCause === cause.id ? BRAND.tealLight : BRAND.white,
                border: `2px solid ${selectedCause === cause.id ? BRAND.teal : BRAND.grayLight}`,
                borderRadius: '16px',
                marginBottom: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left'
              }}
            >
              <div>
                <p style={{ color: BRAND.navy, fontSize: '15px', fontWeight: '700', margin: 0 }}>{cause.name}</p>
                <p style={{ color: BRAND.gray, fontSize: '13px', margin: '4px 0 0 0' }}>{cause.description}</p>
              </div>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: `2px solid ${selectedCause === cause.id ? BRAND.teal : BRAND.gray}`,
                backgroundColor: selectedCause === cause.id ? BRAND.teal : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginLeft: '12px'
              }}>
                {selectedCause === cause.id && (
                  <span style={{ color: BRAND.white, fontSize: '14px' }}>✓</span>
                )}
              </div>
            </button>
          ))}
          <button
            onClick={submitVote}
            disabled={!selectedCause}
            style={{
              ...styles.btn,
              marginTop: '8px',
              opacity: selectedCause ? 1 : 0.5,
              cursor: selectedCause ? 'pointer' : 'not-allowed'
            }}
          >
            Submit Vote · Earn 5 Points
          </button>
        </>
      )}
    </div>
  );

  // Impact Tab
  const ImpactTab = () => (
    <div>
      <h1 style={{ color: BRAND.navy, fontSize: '26px', fontWeight: '700', margin: '0 0 4px 0' }}>Your Impact</h1>
      <p style={{ color: BRAND.gray, fontSize: '14px', margin: '0 0 20px 0' }}>See the difference you're making</p>

      {/* Venture Card */}
      <div style={{
        background: 'linear-gradient(135deg, #E85D4C 0%, #D94A3A 100%)',
        borderRadius: '24px',
        padding: '28px',
        color: BRAND.white,
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '13px', opacity: 0.9, margin: '0 0 4px 0', fontWeight: '600' }}>Venture Partnership</p>
          <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 16px 0' }}>Buy a Bowl, Give a Meal</h3>
          <p style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 4px 0' }}>{user.mealsGiven}</p>
          <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 20px 0' }}>meals donated to Southeast Asia</p>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '12px',
            padding: '14px'
          }}>
            <p style={{ fontSize: '13px', margin: 0 }}>
              Nautical Bowls has delivered <strong>75 million meals</strong> through Venture!
            </p>
          </div>
        </div>
      </div>

      {/* Environmental Stats */}
      <div style={styles.card}>
        <h3 style={{ color: BRAND.navy, fontSize: '16px', fontWeight: '700', margin: '0 0 16px 0' }}>
          Environmental Impact
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={styles.statBox}>
            <p style={{ fontSize: '32px', fontWeight: '800', color: BRAND.teal, margin: 0 }}>{user.co2Saved}</p>
            <p style={{ fontSize: '13px', color: BRAND.tealDark, margin: '4px 0 0 0' }}>kg CO₂ Saved</p>
          </div>
          <div style={styles.statBox}>
            <p style={{ fontSize: '32px', fontWeight: '800', color: BRAND.teal, margin: 0 }}>{user.plasticReduced}</p>
            <p style={{ fontSize: '13px', color: BRAND.tealDark, margin: '4px 0 0 0' }}>kg Plastic Reduced</p>
          </div>
          <div style={styles.statBox}>
            <p style={{ fontSize: '32px', fontWeight: '800', color: BRAND.teal, margin: 0 }}>{user.eventsAttended}</p>
            <p style={{ fontSize: '13px', color: BRAND.tealDark, margin: '4px 0 0 0' }}>Events Attended</p>
          </div>
          <div style={styles.statBox}>
            <p style={{ fontSize: '32px', fontWeight: '800', color: BRAND.teal, margin: 0 }}>{user.bowlsPurchased}</p>
            <p style={{ fontSize: '13px', color: BRAND.tealDark, margin: '4px 0 0 0' }}>Bowls Purchased</p>
          </div>
        </div>
      </div>

      {/* BYOB Reminder */}
      <div style={{
        backgroundColor: BRAND.tealLight,
        borderRadius: '16px',
        padding: '20px',
        border: `1px solid ${BRAND.teal}`,
        marginBottom: '16px'
      }}>
        <p style={{ color: BRAND.tealDark, fontSize: '14px', margin: 0 }}>
          <strong>BYOB Fridays:</strong> Bring your own bowl for a $0.50 discount and 10 bonus Nauti Points!
        </p>
      </div>

      <button style={styles.btn}>
        Share My Impact
      </button>
    </div>
  );

  // Profile Tab
  const ProfileTab = () => (
    <div>
      {/* Profile Header */}
      <div style={{ ...styles.card, textAlign: 'center' }}>
        <div style={{
          width: '88px',
          height: '88px',
          background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealDark} 100%)`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px auto',
          fontSize: '36px',
          color: BRAND.white,
          fontWeight: '700'
        }}>
          {user.name[0]}
        </div>
        <h2 style={{ color: BRAND.navy, fontSize: '22px', fontWeight: '700', margin: '0 0 4px 0' }}>{user.name}</h2>
        <p style={{ color: BRAND.gray, fontSize: '14px', margin: '0 0 20px 0' }}>Plymouth Crew Member</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
          <div>
            <p style={{ color: BRAND.teal, fontSize: '24px', fontWeight: '800', margin: 0 }}>{user.nautiPoints}</p>
            <p style={{ color: BRAND.gray, fontSize: '12px', margin: '4px 0 0 0' }}>Points</p>
          </div>
          <div style={{ width: '1px', backgroundColor: BRAND.grayLight }} />
          <div>
            <p style={{ color: BRAND.teal, fontSize: '24px', fontWeight: '800', margin: 0 }}>{user.mealsGiven}</p>
            <p style={{ color: BRAND.gray, fontSize: '12px', margin: '4px 0 0 0' }}>Meals Given</p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div style={styles.card}>
        {[
          { label: 'Edit Profile', value: '→' },
          { label: 'Preferred Location', value: 'Plymouth, MN' },
          { label: 'Notifications', value: 'On' },
          { label: 'BYOB Reminders', value: 'On' },
          { label: 'Download Impact Report', value: '→' }
        ].map((item, idx) => (
          <div key={idx} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
            borderBottom: idx < 4 ? `1px solid ${BRAND.grayLight}` : 'none',
            cursor: 'pointer'
          }}>
            <span style={{ color: BRAND.navy, fontSize: '15px', fontWeight: '500' }}>{item.label}</span>
            <span style={{ color: BRAND.gray, fontSize: '14px' }}>{item.value}</span>
          </div>
        ))}
      </div>

      <button style={{ ...styles.btnSecondary, width: '100%', marginTop: '8px' }}>
        Sign Out
      </button>
      <p style={{ textAlign: 'center', color: BRAND.gray, fontSize: '12px', marginTop: '16px' }}>Version 1.0.0</p>
    </div>
  );

  // Modal
  const RewardModal = () => (
    <div style={styles.modal} onClick={() => setShowRewardModal(false)}>
      <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2 style={{ color: BRAND.navy, fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0' }}>
          Redeem Reward?
        </h2>
        <p style={{ color: BRAND.navy, fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>
          {selectedReward?.name}
        </p>
        <p style={{ color: BRAND.gray, fontSize: '14px', margin: '0 0 24px 0' }}>
          This will cost <strong style={{ color: BRAND.teal }}>{selectedReward?.points} points</strong>
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => setShowRewardModal(false)} style={{ ...styles.btnSecondary, flex: 1 }}>
            Cancel
          </button>
          <button onClick={confirmRedeem} style={{ ...styles.btn, flex: 1 }}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  // Nav Icons
  const NavIcon = ({ type, active }) => {
    const color = active ? BRAND.teal : BRAND.gray;
    const icons = {
      home: <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      rewards: <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="2"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
      vote: <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
      impact: <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      profile: <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    };
    return icons[type];
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://nauticalbowls.com/wp-content/uploads/2024/07/favicon.png"
              alt="Nautical Bowls"
              style={styles.logo}
            />
            <div style={styles.logoText}>
              <p style={styles.logoTitle}>NAUTICAL BOWLS</p>
              <p style={styles.logoSubtitle}>SUPERFOOD BOWLS | AÇAÍ & MORE</p>
            </div>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: BRAND.grayLight,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            🔔
          </div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {activeTab === 'home' && <HomeTab />}
          {activeTab === 'rewards' && <RewardsTab />}
          {activeTab === 'vote' && <VoteTab />}
          {activeTab === 'impact' && <ImpactTab />}
          {activeTab === 'profile' && <ProfileTab />}
        </div>

        {/* Nav Bar */}
        <div style={styles.navBar}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'rewards', label: 'Rewards' },
            { id: 'vote', label: 'Vote' },
            { id: 'impact', label: 'Impact' },
            { id: 'profile', label: 'Profile' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                ...styles.navItem,
                backgroundColor: activeTab === tab.id ? BRAND.tealLight : 'transparent'
              }}
            >
              <NavIcon type={tab.id} active={activeTab === tab.id} />
              <span style={{
                fontSize: '11px',
                marginTop: '4px',
                fontWeight: '600',
                color: activeTab === tab.id ? BRAND.teal : BRAND.gray
              }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {showRewardModal && <RewardModal />}
    </div>
  );
};

export default NauticalBowlsApp;