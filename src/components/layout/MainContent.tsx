import React from 'react';
import type { MainContentProps } from '../../types/layout';
import { COLORS, TYPOGRAPHY, SPACING } from '../../types/layout';

const MainContent: React.FC<MainContentProps> = ({
  contracts = [],
  reports = [],
  services = [],
}) => {
  const getMainContentStyles = () => ({
    left: 40.50,
    top: 216,
    position: 'absolute' as const,
    flexDirection: 'column' as const,
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    gap: 40,
    display: 'inline-flex' as const,
  });

  const getSectionStyles = () => ({
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    gap: 32,
    display: 'inline-flex' as const,
  });

  const getSectionHeaderStyles = () => ({
    width: 186,
    justifyContent: 'center' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    color: 'black',
    fontSize: TYPOGRAPHY.FONT_SIZES.XXL,
    fontFamily: TYPOGRAPHY.FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 28.80,
    letterSpacing: 0.20,
    wordWrap: 'break-word' as const,
  });

  const getContractsContainerStyles = () => ({
    width: 664,
    flexDirection: 'column' as const,
    justifyContent: 'flex-start' as const,
    alignItems: 'center' as const,
    gap: 32,
    display: 'flex' as const,
  });

  const getContractInfoCardStyles = () => ({
    width: 663,
    height: 114,
    paddingLeft: SPACING.XXXL,
    paddingRight: SPACING.XXXL,
    background: COLORS.BACKGROUND_SECONDARY,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'flex-start' as const,
    display: 'flex' as const,
  });

  const getContractCardsGridStyles = () => ({
    width: 666,
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    gap: 32,
    display: 'inline-flex' as const,
    flexWrap: 'wrap' as const,
    alignContent: 'flex-start' as const,
  });

  const getContractCardStyles = () => ({
    flex: '1 1 0',
    height: 140,
    paddingTop: SPACING.XXL,
    paddingBottom: SPACING.XXL,
    paddingLeft: SPACING.XXL,
    paddingRight: SPACING.MD,
    outline: `1px ${COLORS.OUTLINE_SECONDARY} solid`,
    outlineOffset: -1,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'flex-start' as const,
    gap: SPACING.MD,
    display: 'inline-flex' as const,
    cursor: 'pointer',
  });

  const getContractCardInnerStyles = () => ({
    alignSelf: 'stretch' as const,
    flexDirection: 'column' as const,
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start' as const,
    gap: SPACING.MD,
    display: 'flex' as const,
  });

  const getContractIconStyles = () => ({
    width: 32,
    height: 32,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  });

  const getContractTitleStyles = () => ({
    alignSelf: 'stretch' as const,
    justifyContent: 'center' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    color: 'black',
    fontSize: TYPOGRAPHY.FONT_SIZES.LG,
    fontFamily: TYPOGRAPHY.FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.20,
    wordWrap: 'break-word' as const,
  });

  const getReportCardStyles = () => ({
    width: 316,
    alignSelf: 'stretch' as const,
    padding: SPACING.XXL,
    background: COLORS.BACKGROUND,
    outline: `1px ${COLORS.OUTLINE_SECONDARY} solid`,
    outlineOffset: -1,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'flex-start' as const,
    gap: SPACING.MD,
    display: 'inline-flex' as const,
    cursor: 'pointer',
  });

  const getServiceCardStyles = () => ({
    width: 200,
    height: 140,
    paddingTop: SPACING.XXL,
    paddingBottom: SPACING.XXL,
    paddingLeft: SPACING.XXL,
    paddingRight: SPACING.MD,
    background: COLORS.BACKGROUND_SECONDARY,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'flex-start' as const,
    gap: SPACING.MD,
    display: 'inline-flex' as const,
    cursor: 'pointer',
  });

  const renderContractsSection = () => (
    <div style={getSectionStyles()}>
      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
        <h2 style={getSectionHeaderStyles()}>Договоры</h2>
        <div style={getContractsContainerStyles()}>
          {/* Contract info card */}
          <div style={getContractInfoCardStyles()}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                <div style={getContractIconStyles()}>
                  <div style={{ width: 25.65, height: 32, left: 3.17, top: 0, position: 'absolute', background: COLORS.PRIMITIVES_YELLOW }} />
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                  <div style={getContractTitleStyles()}>Договоры в работе</div>
                  <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: COLORS.CONTENT_MEDIUM, fontSize: TYPOGRAPHY.FONT_SIZES.SM, fontFamily: TYPOGRAPHY.FONT_FAMILY, fontWeight: 400, lineHeight: 19.60, letterSpacing: 0.20, wordWrap: 'break-word' as const }}>
                    Договоры, находящиеся в процессе ввода или оценки рисков
                  </div>
                </div>
              </div>
              <div style={{ width: 24, height: 24, position: 'relative' }}>
                <div style={{ width: 9.12, height: 15.41, left: 11.29, top: 4.29, position: 'absolute', background: COLORS.PRIMITIVES_YELLOW }} />
              </div>
            </div>
          </div>

          {/* Contract cards grid */}
          <div style={getContractCardsGridStyles()}>
            {[
              { title: 'Учебный портал продаж', icon: '📚' },
              { title: 'Пролонгация\nдоговора', icon: '🔄' },
              { title: 'Поиск\nдоговора', icon: '🔍' },
            ].map((contract, index) => (
              <div key={index} style={getContractCardStyles()}>
                <div style={getContractCardInnerStyles()}>
                  <div style={getContractIconStyles()}>
                    <div style={{ width: 32, height: 32, background: COLORS.PRIMITIVES_YELLOW, borderRadius: 4 }} />
                  </div>
                  <div style={getContractTitleStyles()}>
                    {contract.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < contract.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contract creation card */}
      <div style={{ width: 664, height: 286, position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: 658, height: 286, left: 0, top: 0, position: 'absolute', background: COLORS.BACKGROUND_SECONDARY }} />
        <div style={{ width: 664, height: 286, left: 0, top: 0, position: 'absolute', background: '#F5F5F5' }} />
        <img style={{ width: 206.32, height: 268, left: 36, top: 18, position: 'absolute' }} src="https://placehold.co/206x268" alt="Contract illustration" />
        <div style={{ left: 313, top: 31, position: 'absolute', outline: `1px ${COLORS.BACKGROUND_WARNING} solid`, outlineOffset: -1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
          <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
            <div style={{ width: 72, height: 72, position: 'relative', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
              <div style={{ width: 51.31, height: 64, left: 10, top: 4, position: 'absolute', background: COLORS.CONTENT_MEDIUM }} />
            </div>
            <div style={{ width: 290, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: TYPOGRAPHY.FONT_SIZES.XXL, fontFamily: TYPOGRAPHY.FONT_FAMILY, fontWeight: 400, lineHeight: 38.40, letterSpacing: 0.20, wordWrap: 'break-word' as const }}>
              Ввод договора
            </div>
          </div>
          <div style={{ height: 64, paddingLeft: SPACING.XXL, paddingRight: SPACING.XXL, paddingTop: SPACING.MD, paddingBottom: SPACING.MD, background: COLORS.PRIMARY, overflow: 'hidden', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: SPACING.SM, display: 'inline-flex', cursor: 'pointer' }}>
            <div style={{ width: 24, height: 24, position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: 14, height: 14, left: 5, top: 5, position: 'absolute', background: COLORS.CONTENT_ON_BACKGROUND }} />
            </div>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: COLORS.CONTENT_ON_BACKGROUND, fontSize: TYPOGRAPHY.FONT_SIZES.MD, fontFamily: TYPOGRAPHY.FONT_FAMILY, fontWeight: 400, lineHeight: 20.80, letterSpacing: 0.30, wordWrap: 'break-word' as const }}>
              Создать договор
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReportsSection = () => (
    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
      <h2 style={getSectionHeaderStyles()}>Отчёты</h2>
      <div style={{ width: 664, height: 312, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex' }}>
        <div style={{ width: 666, flex: '1 1 0', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
          {[
            { title: 'Дубликат\nполиса', icon: '📄' },
            { title: 'Сформированные\nзаказы', icon: '📋' },
          ].map((report, index) => (
            <div key={index} style={getReportCardStyles()}>
              <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                <div style={{ width: 60, height: 60, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: 42.50, height: 47.50, left: 15, top: 0, position: 'absolute', background: COLORS.PRIMITIVES_YELLOW }} />
                </div>
                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: TYPOGRAPHY.FONT_SIZES.LG, fontFamily: TYPOGRAPHY.FONT_FAMILY, fontWeight: 400, lineHeight: 26, letterSpacing: 0.20, wordWrap: 'break-word' as const }}>
                  {report.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < report.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div style={{ background: COLORS.BACKGROUND, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
      <h2 style={getSectionHeaderStyles()}>Сервисы</h2>
      <div style={{ justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex' }}>
        <div style={{ width: 664, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
          {[
            { title: 'Инфо.\nматериалы', icon: 'ℹ️' },
            { title: 'Сменить\nпароль', icon: '🔑' },
            { title: 'Техническая\nподдержка', icon: '📞' },
            { title: 'Просмотреть реестр', icon: '👁️' },
            { title: 'Создать реестр\nна оплату', icon: '📝' },
            { title: 'Импорт реестра договоров', icon: '📥' },
          ].map((service, index) => (
            <div key={index} style={getServiceCardStyles()}>
              <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: SPACING.MD, display: 'flex' }}>
                <div style={{ width: 32, height: 32, position: 'relative' }}>
                  <div style={{ width: 32, height: 32, background: COLORS.PRIMITIVES_YELLOW, borderRadius: 4 }} />
                </div>
                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: TYPOGRAPHY.FONT_SIZES.LG, fontFamily: TYPOGRAPHY.FONT_FAMILY, fontWeight: 400, lineHeight: 26, letterSpacing: 0.20, wordWrap: 'break-word' as const }}>
                  {service.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={getMainContentStyles()}>
      <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: 31, display: 'inline-flex' }}>
        {renderContractsSection()}
      </div>
      
      <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex' }}>
        {renderReportsSection()}
        {renderServicesSection()}
      </div>
    </div>
  );
};

export default MainContent;
